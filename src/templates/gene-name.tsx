import { graphql } from "gatsby";
import React from "react";

import { GeneFrontmatter } from "../component-queries/types";
import Layout from "../components/Layout";

export const GeneNameTemplate = ({
    isoforms,
    name,
    protein,
    structure,
    symbol,
}: GeneFrontmatter) => {
    return (
        <section>
            <h2>{name}</h2>
            <p>
                symbol: <strong>{symbol}</strong>
            </p>
            <p>
                protein: <strong>{protein}</strong>
            </p>
            <p>
                structure: <strong>{structure}</strong>
            </p>
            <div>isoforms:</div>
            {isoforms?.map((isoform) => (
                <div key={isoform.name}>
                    <h4>{isoform.name}</h4>
                    <ul>
                        {isoform.ids?.map((id) => (
                            <li key={id}>{id}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

const GeneName = ({ data }: QueryResult) => {
    const { markdownRemark: geneData } = data;
    return (
        <Layout>
            <GeneNameTemplate
                protein={geneData.frontmatter.protein}
                symbol={geneData.frontmatter.symbol}
                name={geneData.frontmatter.name}
                structure={geneData.frontmatter.structure}
                isoforms={geneData.frontmatter.isoforms}
            />
        </Layout>
    );
};

export default GeneName;

interface QueryResult {
    data: {
        markdownRemark: {
            frontmatter: GeneFrontmatter;
        };
    };
}

export const pageQuery = graphql`
    query GeneNameById($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            fields {
                slug
            }
            frontmatter {
                name
                symbol
                protein
                structure
                isoforms {
                    name
                    ids
                }
            }
        }
    }
`;
