import { Flex } from "antd";
import React from "react";

import { UnpackedGene } from "../../component-queries/types";
import { formatCellLineId } from "../../utils";
import GeneSymbolTag from "../GeneSymbolTag";
import PlasmidIcon from "../Icons/PlasmidIcon";
import TubeIcon from "../Icons/TubeIcon";
import { MultiLineTableCell, ParentComponent } from "../MultiLineTableCell";
import CellLineInfoCardBase from "./CellLineInfoCardBase";
import { CellLineInfoCardRequiredProps } from "./types";

type ExtractedGeneFields = Record<keyof UnpackedGene, string[]>;

interface NormalCellLineInfoCardProps extends CellLineInfoCardRequiredProps {
    orderPlasmid: string;
    cloneNumber: number;
    taggedGenes: UnpackedGene[];
    fluorescentTags: string[];
    alleleCounts: string[];
}

export const NormalCellLineInfoCard: React.FC<NormalCellLineInfoCardProps> = (
    props,
) => {
    const extractedGeneFields = props.taggedGenes.reduce<ExtractedGeneFields>(
        (acc, gene) => {
            acc.name.push(gene.name);
            acc.symbol.push(gene.symbol);
            if (gene.structure) acc.structure.push(gene.structure);
            if (gene.protein) acc.protein.push(gene.protein);
            return acc;
        },
        { name: [], symbol: [], structure: [], protein: [] },
    );

    const geneSymbolTags = (
        <Flex gap={4}>
            {extractedGeneFields.symbol.map((symbol, i) => (
                <GeneSymbolTag key={i} symbol={symbol as string} />
            ))}
        </Flex>
    );

    const infoRows = [
        {
            key: "1",
            label: "Protein",
            children: (
                <MultiLineTableCell
                    parent={ParentComponent.INFO_CARD}
                    dividers
                    entries={extractedGeneFields.protein}
                />
            ),
        },
        {
            key: "2",
            label: "Gene Symbol",
            children: geneSymbolTags,
        },
        {
            key: "3",
            label: "Gene Name",
            children: (
                <MultiLineTableCell
                    parent={ParentComponent.INFO_CARD}
                    dividers
                    entries={extractedGeneFields.name}
                />
            ),
        },
        {
            key: "4",
            label: "Structure",
            children: (
                <MultiLineTableCell
                    parent={ParentComponent.INFO_CARD}
                    dividers
                    entries={extractedGeneFields.structure}
                />
            ),
        },
    ];

    const buttonList = [
        {
            key: "order",
            label: `Obtain ${formatCellLineId(props.cellLineId)}`,
            disabledLabel: `${formatCellLineId(
                props.cellLineId,
            )} not yet available.`,
            icon: <TubeIcon />,
            href: props.orderLink,
        },
        {
            key: "orderPlasmid",
            label: "Obtain Donor Plasmid",
            disabledLabel: `Plasmid not yet available.`,
            icon: <PlasmidIcon />,
            href: props.orderPlasmid,
        },
    ];

    return (
        <CellLineInfoCardBase
            {...props}
            buttonList={buttonList}
            infoRows={infoRows}
            multiGene={props.taggedGenes.length > 1}
        />
    );
};
