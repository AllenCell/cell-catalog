const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions, schema }) => {
    const { createTypes } = actions;
    const typeDefs = [
        "type MarkdownRemark implements Node { frontmatter: Frontmatter }",
        `type PluripotencyRow {
            marker: String
            positive_cells: Float
            }

            type TrilineageRow {
            germ_layer: String
            marker: String
            percent_positive_cells: String
            }

            type CardiomyocyteDifferentiation {
            troponin_percent_positive: String
            day_of_beating_percent: String
            day_of_beating_range: String
            }

            type RnaSeqRow {
            image: File @fileByRelativePath
            caption: String
            }

            type StemCellCharacteristics {
            pluripotency_analysis: [PluripotencyRow]
            pluripotency_caption: String
            trilineage_differentiation: [TrilineageRow]
            trilineage_caption: String
            cardiomyocyte_differentiation: CardiomyocyteDifferentiation
            cardiomyocyte_differentiation_caption: String
            rnaseq_analysis: [RnaSeqRow]
            }

            type NavBarDropdownItem {
            label: String
            href: String
            }

            type NavBarDropdownItemGroup {
            label: String
            options: [NavBarDropdownItem]
            }

            type MarkdownRemarkFrontmatterHeader {
            title: String
            subtitle: String
            background: File @fileByRelativePath
            }

            `,
        `type GeneticModification {
                gene: MarkdownRemark @link(by: "frontmatter.geneId", from: "gene")
                allele_count: String
                tag_location: String
                fluorescent_tag: String
            }`,
        ` type ImgWithCaption {
            image: File @fileByRelativePath
            caption: String
            }
            type ImagesAndVideos {
            images: [ImgWithCaption]
            }
            type Diagram {
            title: String
            images: [ImgWithCaption]
            }
            type DdpcrRow {
            tag: String
            clone: Float
            fp_ratio: Float
            plasmid: Float
            }
            type AmplifiedJunction {
            edited_gene: String
            junction: String
            expected_size: String
            confirmed_sequence: String
            }
            type OffTargetRow {
            clones_analyzed: Float
            off_targets_sequenced_per_clone: Float
            total_sites_sequenced: Float
            mutations_identified: Float
            }
            type MarkdownRemarkFrontmatterGenomic_characterization {
            diagrams: [Diagram]
            amplified_junctions: [AmplifiedJunction]
            junction_table_caption: String
            ddpcr: [DdpcrRow]
            ddpcr_caption: String
            cr_rna_off_targets: [OffTargetRow]
            off_targets_caption: String
            } `,
        `type Frontmatter {
                disease: MarkdownRemark @link(by: "frontmatter.name")
                genetic_modifications: [GeneticModification]
                gene: [MarkdownRemark] @link(by: "frontmatter.symbol", from: "gene")
                parental_line: MarkdownRemark @link(by: "frontmatter.cell_line_id")
                funding_text:  String @md
                footer_text: String @md
                images_and_videos: ImagesAndVideos
                genomic_characterization: MarkdownRemarkFrontmatterGenomic_characterization
                stem_cell_characteristics: StemCellCharacteristics
                catalogs: [NavBarDropdownItem]
                protocols: [NavBarDropdownItemGroup]
                normalCollections: [NavBarDropdownItem]
                diseaseCollections: [NavBarDropdownItem]
            }`,
    ];
    createTypes(typeDefs);
};

// Expose the raw image string as `image_url` for Cloudinary URL support.
// The existing `image: File @fileByRelativePath` returns null for URLs,
// so we need this field to pass through Cloudinary URLs to the frontend.
exports.createResolvers = ({ createResolvers }) => {
    const imageUrlResolver = {
        image_url: {
            type: "String",
            resolve: (source) => {
                const img = source.image;
                if (typeof img === "string") return img;
                return null;
            },
        },
    };
    createResolvers({
        ImgWithCaption: imageUrlResolver,
        RnaSeqRow: imageUrlResolver,
        MarkdownRemarkFrontmatterEditing_designDiagramsImages: imageUrlResolver,
        Diagram: imageUrlResolver,
        MarkdownRemarkFrontmatterHeader: {
            background_url: {
                type: "String",
                resolve: (source) => {
                    const bg = source.background;
                    if (typeof bg === "string") return bg;
                    return null;
                },
            },
        },
    });
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            templateKey
                        }
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            result.errors.forEach((e) => console.error(e.toString()));
            return Promise.reject(result.errors);
        }

        const edges = result.data.allMarkdownRemark.edges;
        edges.forEach((edge) => {
            const id = edge.node.id;
            const templateKey = edge.node.frontmatter.templateKey;

            // Skip creating pages for data-only markdown files
            if (templateKey === "nav-bar") {
                return;
            }

            createPage({
                path: edge.node.fields.slug,
                component: path.resolve(
                    `src/templates/${String(
                        edge.node.frontmatter.templateKey,
                    )}.tsx`,
                ),
                // additional data can be passed via context
                context: {
                    id,
                },
            });
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};
