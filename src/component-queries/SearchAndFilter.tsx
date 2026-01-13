import { Card } from "antd";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import { createLookupMappings } from "./convert-data";
import {
    CategoryLabel,
    SearchAndFilterQueryResult,
    UnpackedNormalCellLine,
} from "./types";

const {
    container,
    inputContainer,
} = require("../style/search-and-filter.module.css");

interface SearchAndFilterProps {
    allCellLines: UnpackedNormalCellLine[];
    selectedCategories: CategoryLabel[];
    filteredCellLines: UnpackedNormalCellLine[];
    setSelectedCategories: (labels: CategoryLabel[]) => void;
    setResults: (filteredCellLines: UnpackedNormalCellLine[]) => void;
}

// This query groups all cell lines by gene symbol
const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
    allCellLines,
    filteredCellLines,
    selectedCategories,
    setResults,
    setSelectedCategories,
}) => {
    const data = useStaticQuery<SearchAndFilterQueryResult>(graphql`
        query SearchAndFilterQuery {
            allMarkdownRemark(
                filter: {
                    frontmatter: {
                        templateKey: { ne: "disease-cell-line" }
                        cell_line_id: { ne: 0 }
                        status: { ne: "hide" }
                    }
                }
            ) {
                group(
                    field: {
                        frontmatter: {
                            genetic_modifications: {
                                gene: { frontmatter: { symbol: SELECT } }
                            }
                        }
                    }
                ) {
                    fieldValue
                    edges {
                        node {
                            frontmatter {
                                cell_line_id
                                genetic_modifications {
                                    gene {
                                        frontmatter {
                                            name
                                            symbol
                                            protein
                                            structure
                                        }
                                    }
                                }
                                category_labels
                            }
                        }
                    }
                }
            }
        }
    `);

    const mappings = createLookupMappings(data.allMarkdownRemark.group);

    return (
        <Card className={container}>
            <div>Search below or sort by clicking on column headers</div>
            <div className={inputContainer}>
                <SearchBar
                    allCellLines={allCellLines}
                    mappings={mappings}
                    setResults={setResults}
                />
                <Filter
                    filteredList={filteredCellLines}
                    value={selectedCategories}
                    onChange={setSelectedCategories}
                />
            </div>
        </Card>
    );
};

export default SearchAndFilter;
