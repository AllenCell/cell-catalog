import {
    Clone,
    ParentLine,
    Sequence,
    UnpackedCellLineMainInfo,
    UnpackedGene,
} from "../../component-queries/types";
import { DiagramCardProps } from "../shared/DiagramCard";

// crRNA field for normal cell lines differs from
// crRnaTargetSite field for disease cell lines
export interface UnpackedEditingDesign {
    crRnaTargetSite?: string;
    dnaDonorSequence?: Sequence[];
    cas9?: string;
    fPrimer?: string;
    rPrimer?: string;
    diagrams?: DiagramCardProps[];
    crRNA?: string;
    linker?: string;
    ncbiIsoforms?: string;
}

export interface AmplifiedJunction {
    editedGene: string;
    junction: string;
    expectedSize: string;
    confirmedSequence: string;
}

export interface DDCPR {
    tag: string;
    clone: number;
    fpRatio: number;
    plasmid: number;
}

export interface CrRnaOffTargets {
    clonesAnalyzed: number;
    offTargetsSequenced: number;
    totalSitesSequenced: number;
    mutationsIdentified: number;
}

export type GenoCharDataTypes = AmplifiedJunction | DDCPR | CrRnaOffTargets;

export interface GenomicCharacterizationTableData<
    T extends GenoCharDataTypes = GenoCharDataTypes,
> {
    caption: string;
    data: T[];
}

export type AmplifiedJunctionData =
    GenomicCharacterizationTableData<AmplifiedJunction>;
export type DdcprData = GenomicCharacterizationTableData<DDCPR>;
export type CrRnaOffTargetsData =
    GenomicCharacterizationTableData<CrRnaOffTargets>;

export interface UnpackedGenomicCharacterization {
    diagrams?: DiagramCardProps[];
    amplifiedJunctions?: AmplifiedJunctionData;
    ddpcr?: DdcprData;
    crRnaOffTargets?: CrRnaOffTargetsData;
}

export interface PluripotencyAnalysis {
    marker: string;
    positiveCells: number;
    key?: string;
}

export interface TrilineageDifferentiation {
    germLayer: string; // Ectoderm, Endoderm, Mesoderm
    marker: string;
    percentPositiveCells: string;
    key?: string;
}

export interface CardiomyocyteDifferentiation {
    troponinPercentPositive: string;
    dayOfBeatingPercent: string;
    dayOfBeatingRange: string;
    key?: string;
}

export interface DiseaseCardioMyocyteDifferentiation {
    percentPositive: ClonePercentPositive[];
    passingAntibodies?: string[];
    differentiation?: TrilineageDifferentiationData[];
    key?: string;
}

export type StemCellCharDataTypes =
    | PluripotencyAnalysis
    | TrilineageDifferentiation
    | CardiomyocyteDifferentiation
    | DiseaseCardioMyocyteDifferentiation;

export interface StemCellCharTableData<
    T extends StemCellCharDataTypes = StemCellCharDataTypes,
> {
    caption: string;
    data: T[];
}

export type PluripotencyAnalysisData =
    StemCellCharTableData<PluripotencyAnalysis>;
export type TrilineageDifferentiationData =
    StemCellCharTableData<TrilineageDifferentiation>;
export type CardiomyocyteDifferentiationData =
    StemCellCharTableData<CardiomyocyteDifferentiation>;
export type DiseaseCardioMyocyteDifferentiationData =
    StemCellCharTableData<DiseaseCardioMyocyteDifferentiation>;

export interface UnpackedStemCellCharacteristics {
    pluripotencyAnalysis: PluripotencyAnalysisData;
    trilineageDifferentiation: TrilineageDifferentiationData;
    cardiomyocyteDifferentiation: CardiomyocyteDifferentiationData;
    rnaSeqAnalysis: DiagramCardProps[];
    diseaseCardioMyocyteDifferentiation: DiseaseCardioMyocyteDifferentiationData;
}

export interface ClonePercentPositive {
    cloneNumber: number;
    value: number;
}

export interface UnpackedDiseaseCellLineFull extends UnpackedCellLineMainInfo {
    geneName: string;
    geneSymbol: string;
    diseaseName: string;
    snp: string;
    parentalLine: ParentLine;
    clones: Clone[];
    editingDesign: UnpackedEditingDesign | null;
    genomicCharacterization: UnpackedGenomicCharacterization | null;
    stemCellCharacteristics: UnpackedStemCellCharacteristics | null;
}

export interface UnpackedNormalCellLineFull extends UnpackedCellLineMainInfo {
    key: string;
    cloneNumber: number;
    parentalLine: string;
    structures: string[];
    proteins: string[];
    geneticModifications?: {
        taggedGene: UnpackedGene;
        alleleCount: string;
        tagLocation: string;
        fluorescentTag: string;
    }[];
    taggedGenes: UnpackedGene[];
    alleleCounts: string[];
    tagLocations: string[];
    fluorescentTags: string[];
    orderPlasmid: string;
    editingDesign: UnpackedEditingDesign | null;
    genomicCharacterization: UnpackedGenomicCharacterization | null;
    stemCellCharacteristics: UnpackedStemCellCharacteristics | null;
}
