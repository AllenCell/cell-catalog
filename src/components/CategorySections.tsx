import React from "react";



import { CategoryLabel, UnpackedNormalCellLine } from "../component-queries/types";
import CellLineTable from "./CellLineTable";
import { getNormalTableMobileConfig } from "./CellLineTable/MobileView";
import { getNormalTableColumns } from "./CellLineTable/NormalTableColumns";





interface CategorySectionsProps {
    selectedCategories: CategoryLabel[];
    filteredList: UnpackedNormalCellLine[];
    isPhone: boolean;
    released: boolean;
}

// Todo: get copy from science team/UX
export const LABEL_COPY: Record<CategoryLabel, string> = {
    [CategoryLabel.KeyStructureAndOrganelle]:
        "Cellular structures labeled by tagged protein expressed in stem cell state.",
    [CategoryLabel.NuclearStructure]:
        "Structures labeled by tagged protein expressed in nuclear compartment.",
    [CategoryLabel.Stress]:
        "Structures labeled are indicators of specific subtypes of stress responses.",
    [CategoryLabel.CardiacStructure]:
        "Structures labeled are expressed specifically in differentiated cardiomyocytes.",
    [CategoryLabel.Tools]:
        "CRISPRi (dCas9-KRAB) expressed from safe harbor for knockdown experiments, with other structures tagged.",
    [CategoryLabel.Endothelial]:
        "Structure labeled is specifically expressed in differentiated endothelial cells.",
};

const bucketByCategory = (
    list: UnpackedNormalCellLine[],
    selected: CategoryLabel[],
): Record<CategoryLabel, UnpackedNormalCellLine[]> => {
    return list.reduce(
        (acc, item) => {
            for (const label of item.categoryLabels ?? []) {
                if (!selected.includes(label)) continue;
                (acc[label] ??= []).push(item);
            }
            return acc;
        },
        {} as Record<CategoryLabel, UnpackedNormalCellLine[]>,
    );
};

const CategorySections: React.FC<CategorySectionsProps> = ({
    filteredList,
    isPhone,
    released,
    selectedCategories,
}) => {
    const buckets = React.useMemo(
        () => bucketByCategory(filteredList, selectedCategories),
        [filteredList, selectedCategories],
    );

    // Sort categories: non-empty first, empty last (preserves relative order)
    const sortedCategories = React.useMemo(() => {
        const nonEmpty: CategoryLabel[] = [];
        const empty: CategoryLabel[] = [];
        for (const cat of selectedCategories) {
            (buckets[cat]?.length ? nonEmpty : empty).push(cat);
        }
        return [...nonEmpty, ...empty];
    }, [selectedCategories, buckets]);

    return (
        <>
            {sortedCategories.map((cat) => {
                const data = buckets[cat] || [];
                return (
                    <CellLineTable
                        key={cat}
                        tableName={cat}
                        tableDescription={LABEL_COPY[cat] || ""}
                        cellLines={data}
                        released={released}
                        columns={getNormalTableColumns(!released)}
                        mobileConfig={getNormalTableMobileConfig(isPhone)}
                    />
                );
            })}
        </>
    );
};

export default CategorySections;