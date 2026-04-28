import { Card, Flex } from "antd";
import { graphql } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import React from "react";

import Diseases from "../component-queries/Diseases";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/shared/Content";
import { getImageSrcFromFileNode } from "../utils/mediaUtils";

const { container, contentWrapper } = require("../style/about.module.css");
const {
    banner,
    bannerContent,
    mainHeading,
} = require("../style/catalog.module.css");

export interface DiseaseCatalogTemplateProps {
    title: string;
    content: string;
    contentComponent?: React.JSX.ElementType;
    footerText: string;
    fundingText: string;
    acknowledgementsBlock: {
        intro: string;
        collaborators: { name: string; institution: string }[];
        contributor_text: string;
        contributors: { name: string; institution: string }[];
    };
    main: {
        heading: string;
        description: string;
        subheading: string;
    };
}

export const DiseaseCatalogTemplate = ({
    acknowledgementsBlock,
    content,
    contentComponent,
    footerText,
    fundingText,
    main,
    title,
}: DiseaseCatalogTemplateProps) => {
    const PageContent = contentComponent || Content;
    return (
        <section>
            <section className={container}>
                <h1>{title}</h1>
                <Flex className={contentWrapper}>
                    <PageContent className="content" content={content} />
                </Flex>
            </section>
            <h2 className={mainHeading}>{main.heading}</h2>
            {(main.subheading || main.description) && (
                <Card className={banner}>
                    {main.subheading && <h4>{main.subheading}</h4>}
                    {main.description && (
                        <PageContent
                            className={bannerContent}
                            content={main.description}
                        />
                    )}
                </Card>
            )}
            <Diseases />
            <Footer
                generationText={footerText}
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
                    background_url?: string | null;
                };
                footer_text: {
                    html: string;
                };
                funding_text: {
                    html: string;
                };
                acknowledgements_block: {
                    intro: string;
                    collaborators: { name: string; institution: string }[];
                    contributor_text: string;
                    contributors: { name: string; institution: string }[];
                };
                main: {
                    heading: string;
                    subheading: string;
                    description: string;
                };
            };
        };
    };
}

const DiseaseCatalog = ({ data }: QueryResult) => {
    const { markdownRemark: post } = data;
    const imageFile = post.frontmatter.header?.background;
    const backgroundImageUrl =
        (imageFile ? getImageSrcFromFileNode(imageFile) : undefined) ??
        post.frontmatter.header?.background_url ??
        undefined;
    return (
        <Layout
            header={
                <Header
                    title={post.frontmatter.header?.title}
                    subtitle={post.frontmatter.header?.subtitle}
                    backgroundImageUrl={backgroundImageUrl}
                />
            }
        >
            <DiseaseCatalogTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
                footerText={post.frontmatter.footer_text.html}
                fundingText={post.frontmatter.funding_text.html}
                acknowledgementsBlock={post.frontmatter.acknowledgements_block}
                main={post.frontmatter.main}
            />
        </Layout>
    );
};

export default DiseaseCatalog;

export const aboutPageQuery = graphql`
    query DiseaseCatalog($id: String!) {
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
                                placeholder: BLURRED
                                layout: CONSTRAINED
                            )
                        }
                    }
                    background_url
                }
                footer_text {
                    html
                }
                funding_text {
                    html
                }
                acknowledgements_block {
                    intro
                    collaborators {
                        name
                        institution
                    }
                    contributor_text
                    contributors {
                        name
                        institution
                    }
                }
                main {
                    heading
                    subheading
                    description
                }
            }
        }
    }
`;
