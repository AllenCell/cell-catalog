import { SubPage } from "../types";

export const TABLET_BREAKPOINT = 744;
export const PHONE_BREAKPOINT = 576;
export const PRODUCTION_HOST = "cell-catalog.allencell.org";

export const DEFAULT_TABS = [
    SubPage.EditingDesign,
    SubPage.GenomicCharacterization,
    // SubPage.Protocols,
];

export const TABS_WITH_STEM_CELL = [
    SubPage.EditingDesign,
    SubPage.GenomicCharacterization,
    SubPage.StemCellCharacteristics,
    // SubPage.Protocols,
];
