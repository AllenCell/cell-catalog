import { Divider } from "antd";
import React from "react";

import { Clone, ParentLine } from "../../component-queries/types";
import { PRIMARY_COLOR } from "../../style/theme";
import { formatCellLineId, getCloneSummary } from "../../utils";
import CloneTable from "../CloneTable";
import GeneSymbolTag from "../GeneSymbolTag";
import { TruncatedText } from "../TruncatedText";
import CellLineInfoCardBase from "./CellLineInfoCardBase";
import { CellLineInfoCardRequiredProps } from "./types";

interface DiseaseCellLineInfoCardProps extends CellLineInfoCardRequiredProps {
    parentalLine: ParentLine;
    snp: string;
    clones: Clone[];
}

export const DiseaseCellLineInfoCard: React.FC<DiseaseCellLineInfoCardProps> = (
    props,
) => {
    const infoRows = [
        {
            key: "1",
            label: "SNP",
            children: <TruncatedText>{props.snp}</TruncatedText>,
        },
        {
            key: "2",
            label: "Gene Symbol",
            children: <GeneSymbolTag symbol={props.geneSymbol} />,
        },
        {
            key: "3",
            label: "Gene Name",
            children: <TruncatedText>{props.geneName}</TruncatedText>,
        },
        {
            key: "4",
            label: "Parental Line",
            children: (
                <TruncatedText>
                    {`${formatCellLineId(props.parentalLine.cellLineId)} cl. ${
                        props.parentalLine.cloneNumber
                    } ${props.parentalLine.taggedGenes[0].symbol}`}
                </TruncatedText>
            ),
        },
    ];

    const cloneSummary = getCloneSummary(props.clones);
    const buttonSubtitle = (
        <>
            <span style={{ fontWeight: 400 }}>{cloneSummary.numMutants}</span>
            <span style={{ fontWeight: 300 }}> mutant clones</span>
            <Divider type="vertical" style={{ borderColor: PRIMARY_COLOR }} />
            <span style={{ fontWeight: 400 }}>
                {cloneSummary.numIsogenics}
            </span>{" "}
            <span style={{ fontWeight: 300 }}>isogenic controls</span>
        </>
    );

    const buttonList = [
        {
            key: "order",
            label: `Obtain ${formatCellLineId(props.cellLineId)}`,
            disabledLabel: `${formatCellLineId(
                props.cellLineId,
            )} not yet available.`,
            href: props.orderLink,
            subtitle: buttonSubtitle,
        },
    ];

    return (
        <CellLineInfoCardBase
            {...props}
            buttonList={buttonList}
            infoRows={infoRows}
            additionalInfo={<CloneTable dataSource={props.clones} />}
        />
    );
};
