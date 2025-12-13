import { WindowLocation } from "@reach/router";

export enum SubPage {
    EditingDesign = "Editing Design",
    GenomicCharacterization = "Genomic Characterization",
    StemCellCharacteristics = "Stem Cell Characteristics",
    // Protocols = "Protocols",
}

export enum Disease {
    Cardiomyopathy = "Cardiomyopathy",
    Laminopathy = "Laminopathy",
    SkeletalMyopathy = "Skeletal Myopathy",
}

export enum CatalogRoute {
    CellCatalog = "/",
    DiseaseCatalog = "/disease-catalog",
}

export type CatalogLocationState = {
    fromCellCatalog?: boolean;
};

export type LocationWithState = WindowLocation<unknown> & {
    state?: CatalogLocationState;
};
