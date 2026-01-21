import { describe, expect, it } from "vitest";

import { Clone } from "../component-queries/types";
import {
    formatCellLineId,
    formatCellLineSlug,
    getCloneSummary,
    hasTableData,
    nonEmptyArray,
} from "./index";

describe("formatCellLineId", () => {
    it("pads single digit IDs with zeros", () => {
        expect(formatCellLineId(1)).toBe("AICS-0001");
    });

    it("pads double digit IDs with zeros", () => {
        expect(formatCellLineId(42)).toBe("AICS-0042");
    });

    it("pads triple digit IDs with one zero", () => {
        expect(formatCellLineId(123)).toBe("AICS-0123");
    });

    it("does not pad four digit IDs", () => {
        expect(formatCellLineId(1234)).toBe("AICS-1234");
    });
});

describe("formatCellLineSlug", () => {
    it("formats cell line ID and clone number into slug", () => {
        expect(formatCellLineSlug(42, 1)).toBe("AICS-42-1");
    });
});

describe("getCloneSummary", () => {
    it("counts mutants and isogenics correctly", () => {
        const clones: Clone[] = [
            { type: "Mutant" },
            { type: "Mutant" },
            { type: "Isogenic" },
        ];
        const result = getCloneSummary(clones);
        expect(result.numMutants).toBe(2);
        expect(result.numIsogenics).toBe(1);
    });

    it("returns zeros for empty array", () => {
        const result = getCloneSummary([]);
        expect(result.numMutants).toBe(0);
        expect(result.numIsogenics).toBe(0);
    });
});

describe("hasTableData", () => {
    it("returns true for object with non-empty data array", () => {
        expect(hasTableData({ data: [1, 2, 3] })).toBe(true);
    });

    it("returns false for object with empty data array", () => {
        expect(hasTableData({ data: [] })).toBe(false);
    });

    it("returns false for null", () => {
        expect(hasTableData(null)).toBe(false);
    });

    it("returns false for undefined", () => {
        expect(hasTableData(undefined)).toBe(false);
    });
});

describe("nonEmptyArray", () => {
    it("returns true for non-empty array", () => {
        expect(nonEmptyArray([1, 2, 3])).toBe(true);
    });

    it("returns false for empty array", () => {
        expect(nonEmptyArray([])).toBe(false);
    });

    it("returns false for null", () => {
        expect(nonEmptyArray(null)).toBe(false);
    });

    it("returns false for undefined", () => {
        expect(nonEmptyArray(undefined)).toBe(false);
    });
});
