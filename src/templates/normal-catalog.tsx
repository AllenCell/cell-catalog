import { Divider } from "antd";
import { graphql } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import React from "react";

import About from "../component-queries/About";
import NormalCellLines from "../component-queries/NormalCellLines";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { getImageSrcFromFileNode } from "../utils/mediaUtils";

const { container, mainHeading } = require("../style/catalog.module.css");
interface NormalCatalogTemplateProps {
    title: string;
    content: string;
    fundingText: string;
    acknowledgementsBlock: {
        intro: string;
        contributors: { name: string; institution: string }[];
        outro: string;
    };
    tableHeader: string;
}

export const NormalCatalogTemplate = ({
    acknowledgementsBlock,
    fundingText,
    tableHeader,
}: NormalCatalogTemplateProps) => {
    return (
        <section className={container}>
            <About />
            <Divider />
            <h2 className={mainHeading}>{tableHeader}</h2>
            <NormalCellLines />
            <Footer
                acknowledgementsBlock={acknowledgementsBlock}
                fundingText={fundingText}
            />
        </section>
    );
};

interface QueryResult {
    data: {
        markdownRemark: {
            html: string;
            frontmatter: {
                title: string;
                header: {
                    title?: string;
                    subtitle?: string;
                    background?: FileNode;
                };
                funding_text: {
                    html: string;
                };
                acknowledgements_block: {
                    intro: string;
                    contributors: { name: string; institution: string }[];
                    outro: string;
                };
                table_header: string;
            };
        };
    };
}

const NormalCatalog = ({ data }: QueryResult) => {
    const { markdownRemark: post } = data;
    const imageFile = post.frontmatter.header?.background;
    const backgroundImageUrl = imageFile
        ? getImageSrcFromFileNode(imageFile)
        : undefined;
    return (
        <Layout
            header={
                <Header
                    backgroundImageUrl={backgroundImageUrl}
                    title={post.frontmatter.header?.title}
                    subtitle={post.frontmatter.header?.subtitle}
                />
            }
        >
            <NormalCatalogTemplate
                title={post.frontmatter.title}
                content={post.html}
                fundingText={post.frontmatter.funding_text.html}
                acknowledgementsBlock={post.frontmatter.acknowledgements_block}
                tableHeader={post.frontmatter.table_header}
            />
        </Layout>
    );
};

export default NormalCatalog;

export const aboutPageQuery = graphql`
    query NormalCatalog($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                header {
                    title
                    subtitle
                    background {
                        childImageSharp {
                            gatsbyImageData(
                                width: 2000
                                placeholder: BLURRED
                                layout: CONSTRAINED
                            )
                        }
                    }
                }
                funding_text {
                    html
                }
                table_header
                acknowledgements_block {
                    intro
                    contributors {
                        name
                        institution
                    }
                    outro
                }
            }
        }
    }
`;
