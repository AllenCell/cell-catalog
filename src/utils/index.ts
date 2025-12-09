import { filter } from "lodash";
import { Clone } from "../component-queries/types";

export const formatCellLineId = (cellLineId: number) => {
    const zeros = "0000";
    return `AICS-${zeros.slice(0, zeros.length - cellLineId.toString().length) + cellLineId}`;
};

export const formatCellLineSlug = (cellLineId: number, cloneNumber: number) => {
    return `AICS-${cellLineId}-${cloneNumber}`;
};


export const getCloneSummary = (clones: Clone[]) => {
    const numMutants = filter(clones, { type: "Mutant" }).length;
    const numIsogenics = clones.length - numMutants;
    return {
        numMutants,
        numIsogenics,
    };
};

// TODO: we could make this check more robust to look for partial or jagged data
export const hasTableData = <T>(t?: { data: T[] } | null): boolean =>
    Array.isArray(t?.data) && t.data.length > 0;

export const nonEmptyArray = <T>(a?: T[] | null): a is T[] =>
    Array.isArray(a) && a.length > 0;

export const openLinkInNewTab = (link: string) => {
    if (link) {
        window.open(link, "_blank", "noopener,noreferrer");
    }
}