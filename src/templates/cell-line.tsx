import { Link, graphql } from "gatsby";
import React from "react";

import { NormalCellLineFrontmatter } from "../component-queries/types";
import { NormalCellLineInfoCard } from "../components/CellLineInfoCard/NormalCellLineInfoCard";
import ImagesAndVideos from "../components/ImagesAndVideos";
import Layout from "../components/Layout";
import SubpageTabs from "../components/SubPage/SubpageTabs";
import { unpackNormalFrontmatterForSubpage } from "../components/SubPage/convert-data";
import { UnpackedNormalCellLineFull } from "../components/SubPage/types";
import { DefaultButton } from "../components/shared/Buttons";
import { TABS_WITH_STEM_CELL } from "../constants";
import { getImages, getVideos, hasMedia } from "../utils/mediaUtils";

const {
    container,
    imagesContainer,
    leftCard,
    returnArrow,
} = require("../style/disease-cell-line.module.css");

const Arrow = require("../img/arrow.svg");

interface QueryResult {
    location: Location;
    data: {
        markdownRemark: {
            id: string;
            key: string;
            fields: {
                slug: string;
            };
            frontmatter: NormalCellLineFrontmatter;
        };
    };
}

interface CellLineProps extends UnpackedNormalCellLineFull {
    href: string;
}

export const CellLineTemplate = ({
    alleleCount,
    cellLineId,
    certificateOfAnalysis,
    cloneNumber,
    editingDesign,
    fluorescentTag,
    genomicCharacterization,
    healthCertificate,
    href,
    imagesAndVideos,
    orderLink,
    orderPlasmid,
    stemCellCharacteristics,
    taggedGene,
}: CellLineProps) => {
    const hasImagesOrVideos = hasMedia(imagesAndVideos);
    if (cellLineId === 0) {
        return null;
    }
    return (
        <>
            <div className={container}>
                <div className={leftCard}>
                    <Link to="/">
                        <DefaultButton>
                            <Arrow className={returnArrow} />
                            Return to Cell Catalog
                        </DefaultButton>
                    </Link>
                    <NormalCellLineInfoCard
                        href={href}
                        cellLineId={cellLineId}
                        geneName={taggedGene[0].name}
                        geneSymbol={taggedGene[0].symbol}
                        orderLink={orderLink}
                        certificateOfAnalysis={certificateOfAnalysis}
                        orderPlasmid={orderPlasmid}
                        healthCertificate={healthCertificate}
                        cloneNumber={cloneNumber}
                        taggedGene={taggedGene}
                        fluorescentTag={fluorescentTag}
                        alleleCount={alleleCount}
                    />
                </div>
                <div className={imagesContainer}>
                    {hasImagesOrVideos && (
                        <ImagesAndVideos
                            cellLineId={cellLineId}
                            geneSymbol={taggedGene?.[0]?.symbol || ""}
                            fluorescentTag={fluorescentTag?.[0] || ""}
                            alleleTag={alleleCount?.[0] || ""}
                            images={getImages(imagesAndVideos)}
                            videos={getVideos(imagesAndVideos)}
                        />
                    )}
                </div>
            </div>
            <SubpageTabs
                editingDesignData={editingDesign}
                genomicCharacterizationData={genomicCharacterization}
                stemCellCharacteristics={stemCellCharacteristics}
                tabsToRender={TABS_WITH_STEM_CELL}
            />
        </>
    );
};

const CellLine = ({ data, location }: QueryResult) => {
    const { markdownRemark: cellLine } = data;

    const unpackedCellLine = unpackNormalFrontmatterForSubpage(cellLine);

    return (
        <Layout>
            <CellLineTemplate
                href={location.href || ""}
                {...unpackedCellLine}
            />
        </Layout>
    );
};

export default CellLine;

export const pageQuery = graphql`
    query CellLineByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            fields {
                slug
            }
            frontmatter {
                cell_line_id
                certificate_of_analysis
                eu_hpsc_reg
                order_link
                donor_plasmid
                parental_line {
                    frontmatter {
                        name
                    }
                }
                clone_number
                genetic_modifications {
                    gene {
                        frontmatter {
                            symbol
                            name
                            protein
                            structure
                        }
                    }
                    tag_location
                    fluorescent_tag
                    allele_count
                }
                status
                images_and_videos {
                    images {
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 400
                                    placeholder: BLURRED
                                )
                            }
                        }
                        caption
                    }
                    videos {
                        video
                        caption
                    }
                }
                editing_design {
                    ncbi_isoforms
                    cr_rna
                    linker
                    cas9
                    diagrams {
                        title
                        images {
                            image {
                                childImageSharp {
                                    gatsbyImageData(
                                        placeholder: BLURRED
                                        layout: CONSTRAINED
                                    )
                                }
                            }
                            caption
                        }
                    }
                }
                genomic_characterization {
                    diagrams {
                        title
                        images {
                            image {
                                childImageSharp {
                                    gatsbyImageData(
                                        placeholder: BLURRED
                                        layout: CONSTRAINED
                                    )
                                }
                            }
                            caption
                        }
                    }
                    amplified_junctions {
                        edited_gene
                        junction
                        expected_size
                        confirmed_sequence
                    }
                    ddpcr {
                        tag
                        clone
                        fp_ratio
                        plasmid
                    }
                    cr_rna_off_targets {
                        clones_analyzed
                        off_targets_sequenced_per_clone
                        total_sites_sequenced
                        mutations_identified
                    }
                    junction_table_caption
                    ddpcr_caption
                    off_targets_caption
                }
                stem_cell_characteristics {
                    pluripotency_analysis {
                        marker
                        positive_cells
                    }
                    pluripotency_caption
                    trilineage_differentiation {
                        germ_layer
                        marker
                        percent_positive_cells
                    }
                    trilineage_caption
                    cardiomyocyte_differentiation {
                        troponin_percent_positive
                        day_of_beating_percent
                        day_of_beating_range
                    }
                    cardiomyocyte_differentiation_caption
                    rnaseq_analysis {
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    layout: CONSTRAINED
                                )
                            }
                        }
                        caption
                    }
                }
            }
        }
    }
`;
