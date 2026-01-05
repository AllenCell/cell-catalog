import { Flex } from "antd";
import classNames from "classnames";
import React from "react";

import {
    Clone,
    UnpackedDiseaseCellLine,
    UnpackedGene,
    UnpackedNormalCellLine,
} from "../../component-queries/types";
import { formatCellLineId, getCloneSummary } from "../../utils";
import CloneSummary from "../CloneSummary";
import GeneDisplay from "../GeneDisplay";
import ParentalLineModal from "../ParentalLineModal";
import {
    cellLineIdColumn,
    certificateOfAnalysisColumn,
    obtainLineColumn,
} from "./SharedColumns";
import {
    CellLineColumns,
    UnpackedCellLine,
    mdBreakpoint,
    smBreakPoint,
} from "./types";

const {
    clones,
    lastColumn,
    snpColumn,
} = require("../../style/table.module.css");

export const getDiseaseTableColumns = (
    inProgress: boolean,
    suppressRowClickRef: React.MutableRefObject<boolean>,
): CellLineColumns<UnpackedCellLine> => {
    const columns = [
        { ...cellLineIdColumn },
        {
            title: "SNP",
            key: "snp",
            dataIndex: "snp",
            className: snpColumn,
            responsive: smBreakPoint,
            render: (snp: string) => {
                const snps = snp.split(":");
                return (
                    <Flex vertical={true} key={snp}>
                        <span key={"snp-0"}>{snps[0]}: </span>
                        <span key={"snp-1"}>{snps[1]}</span>
                    </Flex>
                );
            },
        },
        {
            title: "Gene Symbol & Name",
            width: 280,
            key: "mutatedGenes",
            dataIndex: "mutatedGenes",
            responsive: mdBreakpoint,
            render: (mutatedGenes: UnpackedGene[]) => {
                return (
                    <>
                        {mutatedGenes.map((gene, index) => (
                            <GeneDisplay key={index} gene={gene} />
                        ))}
                    </>
                );
            },
        },
        {
            title: "Parental Line",
            key: "parentalLine",
            dataIndex: "parentalLine",
            responsive: mdBreakpoint,
            render: (
                parentalLine: UnpackedNormalCellLine,
                record: UnpackedCellLine,
            ) => {
                const cellLine = record as UnpackedDiseaseCellLine;
                return (
                    <ParentalLineModal
                        key={parentalLine.cellLineId}
                        suppressRowClickRef={suppressRowClickRef}
                        formattedId={formatCellLineId(parentalLine.cellLineId)}
                        cellLineId={parentalLine.cellLineId}
                        cloneNumber={parentalLine.cloneNumber}
                        image={parentalLine.thumbnailImage}
                        taggedGenes={parentalLine.taggedGenes}
                        status={cellLine.diseaseStatus}
                        tagLocations={parentalLine.tagLocations}
                        fluorescentTags={parentalLine.fluorescentTags}
                    />
                );
            },
        },
        {
            title: "Clones",
            key: "clones",
            dataIndex: "clones",
            className: classNames(clones, { [lastColumn]: !inProgress }),
            responsive: mdBreakpoint,
            render: (clones: Clone[], _: unknown, index: number) => {
                const { numIsogenics, numMutants } = getCloneSummary(clones);
                return (
                    <CloneSummary
                        numMutants={numMutants}
                        numIsogenics={numIsogenics}
                        index={index}
                    />
                );
            },
        },
    ];

    if (!inProgress) {
        return [
            ...columns,
            { ...obtainLineColumn },
            { ...certificateOfAnalysisColumn },
        ];
    }
    return columns;
};
