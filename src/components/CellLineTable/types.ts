import { GetProp, Table } from "antd";

import {
    UnpackedDiseaseCellLine,
    UnpackedNormalCellLine,
} from "../../component-queries/types";

export const mdBreakpoint = ["md" as const];
export const smBreakPoint = ["sm" as const];

export type CellLineColumns<T> = GetProp<typeof Table<T>, "columns">;
export type UnpackedCellLine = UnpackedNormalCellLine | UnpackedDiseaseCellLine;

export enum TableStatus {
    ComingSoon = "Coming soon",
    Available = "Available",
}
