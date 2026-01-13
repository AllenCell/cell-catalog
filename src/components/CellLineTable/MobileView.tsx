import { Flex } from "antd";
import React from "react";

import {
    UnpackedDiseaseCellLine,
    UnpackedNormalCellLine,
} from "../../component-queries/types";
import { getCloneSummary } from "../../utils";
import CloneSummary from "../CloneSummary";
import GeneDisplay from "../GeneDisplay";
import { UnpackedCellLine } from "./types";

const { expandableContent } = require("../../style/table.module.css");

export const getDiseaseTableMobileConfig = (
    isPhone: boolean,
): {
    expandedRowRender: (
        record: UnpackedCellLine,
        index: number,
    ) => React.ReactNode;
} => {
    return {
        expandedRowRender: (record: UnpackedCellLine, index: number) => {
            const diseaseCellLine = record as UnpackedDiseaseCellLine;
            return (
                <Flex
                    key={diseaseCellLine.cellLineId}
                    gap={16}
                    justify={"flex-start" as const}
                    className={expandableContent}
                    wrap={"wrap"}
                >
                    {isPhone && (
                        <div>
                            <label>SNP:</label>
                            <Flex vertical={true} key={diseaseCellLine.snp}>
                                <span key={"snp-0"}>
                                    {diseaseCellLine.snp.split(":")[0]}:{" "}
                                </span>
                                <span key={"snp-1"}>
                                    {diseaseCellLine.snp.split(":")[1]}
                                </span>
                            </Flex>
                        </div>
                    )}
                    <div>
                        <label>Gene Symbol & Name:</label>
                        {diseaseCellLine.mutatedGenes.map((gene, index) => (
                            <GeneDisplay key={index} gene={gene} />
                        ))}
                    </div>
                    <div>
                        <label>Clones:</label>
                        <CloneSummary
                            numMutants={
                                getCloneSummary(diseaseCellLine.clones)
                                    .numMutants
                            }
                            numIsogenics={
                                getCloneSummary(diseaseCellLine.clones)
                                    .numIsogenics
                            }
                            index={index}
                        />
                    </div>
                </Flex>
            );
        },
    };
};

export const getNormalTableMobileConfig = (
    isPhone: boolean,
): {
    expandedRowRender: (record: UnpackedCellLine) => React.ReactNode;
} => {
    return {
        expandedRowRender: (record: UnpackedCellLine) => {
            const normalCellLine = record as UnpackedNormalCellLine;
            if (!normalCellLine.proteins || !normalCellLine.taggedGenes) {
                return <div></div>;
            }
            return (
                <Flex
                    key={normalCellLine.cellLineId}
                    gap={16}
                    justify={"flex-start" as const}
                    className={expandableContent}
                    wrap={"wrap" as const}
                >
                    {isPhone && (
                        <div>
                            <label>Tagged Protein:</label>
                            {normalCellLine.proteins.map((protein, index) => (
                                <Flex vertical={true} key={index}>
                                    <span key={protein}>{protein}</span>
                                </Flex>
                            ))}
                        </div>
                    )}
                    <div>
                        <label>Gene Symbol & Name:</label>
                        {normalCellLine.taggedGenes.map((gene, index) => (
                            <GeneDisplay key={index} gene={gene} />
                        ))}
                    </div>
                </Flex>
            );
        },
    };
};
