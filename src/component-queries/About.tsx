import { Flex } from "antd";
import { graphql, useStaticQuery } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import React from "react";

import AboutButton from "../components/AboutButton";
import { RichText, renderRichText } from "../utils/formattingUtils";

const {
    container,
    contentWrapper,
    diseaseCopy,
    italic,
} = require("../style/about.module.css");

interface AboutQueryData {
    markdownRemark: {
        frontmatter: {
            title: string;
            about_block: {
                primary: RichText;
                disease: RichText;
            };
            coriell_image: FileNode;
            coriell_link: string;
            addgene_image: FileNode;
            addgene_link: string;
        };
    };
}

const About: React.FC = () => {
    const data = useStaticQuery<AboutQueryData>(graphql`
        query AboutQuery {
            markdownRemark(
                frontmatter: { templateKey: { eq: "normal-catalog" } }
            ) {
                frontmatter {
                    title
                    about_block {
                        primary {
                            text
                            emphasis {
                                text
                            }
                            link {
                                text
                                url
                            }
                        }
                        disease {
                            text
                            link {
                                text
                                url
                            }
                        }
                    }
                    coriell_image {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                                layout: FIXED
                                width: 190
                            )
                        }
                    }
                    coriell_link
                    addgene_image {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                                layout: FIXED
                                width: 190
                            )
                        }
                    }
                    addgene_link
                }
            }
        }
    `);

    const {
        about_block,
        addgene_image,
        addgene_link,
        coriell_image,
        coriell_link,
        title,
    } = data.markdownRemark.frontmatter;

    return (
        <section className={container}>
            <Flex gap={48}>
                <section>
                    <h1>{title}</h1>
                    <Flex
                        className={contentWrapper}
                        vertical
                        justify="space-between"
                    >
                        <div className="content">
                            <p>{renderRichText(about_block.primary, italic)}</p>
                            <div className={diseaseCopy}>
                                {renderRichText(about_block.disease)}
                            </div>
                        </div>
                    </Flex>
                </section>
                <Flex gap={8} vertical>
                    <AboutButton
                        image={coriell_image}
                        link={coriell_link}
                        title="View Allen Cell Collection on"
                    />
                    <AboutButton
                        image={addgene_image}
                        link={addgene_link}
                        title="View Plasmid Collection on"
                    />
                </Flex>
            </Flex>
        </section>
    );
};

export default About;
