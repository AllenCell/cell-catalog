import { Flex } from "antd";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

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
                }
            }
        }
    `);

    const { about_block, title } = data.markdownRemark.frontmatter;

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
            </Flex>
        </section>
    );
};

export default About;
