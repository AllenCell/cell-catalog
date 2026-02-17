import { IGatsbyImageData } from "gatsby-plugin-image";

// this is the image that comes from the CMS
// without any data processing
// it's just the user entered data
export interface UserEnteredImage {
    image: string; // this is the image URL or path
    caption: string;
}

export interface ImageAsset {
    url: string;
    path: string;
    field?: string;
    fileObj?: File;
}

export interface ImageAssetWithCaption {
    image: ImageAsset;
    caption: string;
}

export interface RawImageData {
    image: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
        };
    };
    caption: string;
}

export interface UnpackedImageData {
    image: IGatsbyImageData;
    caption: string;
}

export interface RawVideoData {
    video: string;
    caption: string;
}

export interface MediaFrontmatter {
    images?: RawImageData[];
    videos?: RawVideoData[];
}

export type ImageOrVideo = UnpackedImageData | RawVideoData;

export interface Isoform {
    name: string;
    ids?: string[];
}
export interface GeneFrontmatter {
    name: string;
    symbol: string;
    structure?: string;
    protein?: string;
    isoforms?: Isoform[];
}

export interface GeneticModification {
    gene: {
        frontmatter: GeneFrontmatter;
    };
    allele_count: string;
    tag_location: string;
    fluorescent_tag: string;
}

export interface StemCellCharacteristicsFrontmatter {
    pluripotency_analysis: {
        marker: string;
        positive_cells: number;
    }[];
    pluripotency_caption: string;
    trilineage_differentiation: {
        germ_layer: string;
        marker: string;
        percent_positive_cells: string;
    }[];
    trilineage_caption: string;
    cardiomyocyte_differentiation: {
        troponin_percent_positive: string;
        day_of_beating_percent: string;
        day_of_beating_range: string;
    };
    cardiomyocyte_differentiation_caption: string;
    rnaseq_analysis: UnpackedImageData[];
}

export interface ParentalLineFrontmatter {
    cell_line_id: number;
    clone_number: number;
    genetic_modifications?: GeneticModification[];
    images_and_videos?: MediaFrontmatter;
}

export interface GenomicCharacterizationFrontmatter {
    diagrams: DiagramList[];
    amplified_junctions: {
        edited_gene: string;
        junction: string;
        expected_size: string;
        confirmed_sequence: string; // "" yes, NA, Not Sequenced
    }[];
    junction_table_caption: string;
    ddpcr: {
        tag: string;
        clone: number;
        fp_ratio: number;
        plasmid: number;
    }[]
    ddpcr_caption: string;
    cr_rna_off_targets: {
        clones_analyzed: number;
        off_targets_sequenced_per_clone: number;
        total_sites_sequenced: number;
        mutations_identified: number;
    }[]
    off_targets_caption: string;
}

export interface NormalCellLineFrontmatter {
    templateKey: string;
    cell_line_id: number;
    status: CellLineStatus;
    clone_number: number;
    order_link: string;
    genetic_modifications?: GeneticModification[];
    donor_plasmid: string;
    parental_line: {
        frontmatter: {
            name: string;
        };
    };
    certificate_of_analysis: string;
    hpscreg_certificate_link: string;
    editing_design: {
        ncbi_isoforms: string;
        cr_rna: string;
        linker: string;
        cas9: string;
        diagrams: DiagramList[];
    };
    genomic_characterization: GenomicCharacterizationFrontmatter;
    stem_cell_characteristics: StemCellCharacteristicsFrontmatter;
    images_and_videos?: MediaFrontmatter;
    category_labels: CategoryLabel[];
};

export interface NormalCellLineNode {
    id: string;
    key: string;
    fields: {
        slug: string;
    };
    frontmatter: NormalCellLineFrontmatter;
}

export enum CellLineStatus {
    DataComplete = "data complete",
    Released = "released",
    InProgress = "in progress",
    Hide = "hide",
}

enum Antibody {
    PAX6 = "PAX6",
    SOX17 = "SOX17",
    BRACHYURY = "Brachyury",
}

enum TranscriptFactor {
    NANOG = "NANOG",
    OCT4 = "OCT4",
    SOX2 = "SOX2",
    SSEA1 = "SSEA-1",
    SSEA4 = "SSEA-4",
}

// NOTE: Temporarily optional fields, but
// once the data has been updated by gene editing
// these fields will be required
export interface Clone {
    type: string;
    clone_number?: number;
    genotype?: string;
    transfection_replicate?: string;
    positive_cells?: number;
    antibody_analysis?: Antibody[];
    differentiation?: { [key in TranscriptFactor]?: number };
}

export interface Sequence {
    sequence: string;
    type: string;
}

export interface SingleImageDiagram extends UnpackedImageData {
    title: string;
}

export interface DiagramList {
    images: UnpackedImageData[];
    title: string;
}

export interface DiseaseCellLineFrontmatter {
    templateKey: string;
    cell_line_id: number;
    parental_line: { frontmatter: ParentalLineFrontmatter };
    disease: {
        frontmatter: DiseaseFrontmatter;
    };
    snp: string;
    clones: Clone[];
    certificate_of_analysis: string;
    order_link: string;
    status: CellLineStatus;
    hpscreg_certificate_link: string;
    images_and_videos?: MediaFrontmatter;
    editing_design?: {
        cr_rna_target_site: string;
        dna_donor_sequence: Sequence[];
        cas9: string;
        f_primer: string;
        r_primer: string;
        diagrams: DiagramList[];
    };
    genomic_characterization?: {
        diagrams: SingleImageDiagram[];
    };
}

export interface DiseaseCellLineNode {
    id: string;
    fields: {
        slug: string;
    };
    frontmatter: DiseaseCellLineFrontmatter;
}

export interface DiseaseCellLineEdge {
    node: DiseaseCellLineNode;
}

export interface DiseaseFrontmatter {
    name: string;
    gene: {
        frontmatter: GeneFrontmatter;
    }[];
    status: string;
}

export interface UnpackedGene {
    name: string;
    symbol: string;
    structure?: string;
    protein?: string;
}

export interface UnpackedCellLineMainInfo {
    path: string;
    cellLineId: number;
    status: CellLineStatus;
    certificateOfAnalysis: string;
    healthCertificate: string;
    orderLink: string;
    thumbnailImage?: IGatsbyImageData | null;
    imagesAndVideos?: MediaFrontmatter;
}

export interface UnpackedNormalCellLine extends UnpackedCellLineMainInfo {
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
    categoryLabels: CategoryLabel[];
}

export type ParentLine = Pick<UnpackedNormalCellLine,
    "thumbnailImage" |
    "cellLineId" |
    "cloneNumber" |
    "taggedGenes" |
    "alleleCounts" |
    "tagLocations" |
    "fluorescentTags" |
    "geneticModifications"
>

export interface UnpackedDiseaseCellLine extends UnpackedCellLineMainInfo {
    diseaseStatus: string;
    path: string;
    key: string;
    snp: string;
    clones: Clone[];
    parentalLine: ParentLine;
    mutatedGenes: UnpackedGene[];
}

export interface LookupGroup {
    node: {
        frontmatter: {
            cell_line_id: number;
            genetic_modifications: GeneticModification[];
            category_labels: string[];
        };
    };
}

export interface SearchAndFilterGroup {
    fieldValue: string;
    edges: LookupGroup[];
}

export interface SearchAndFilterQueryResult {
    allMarkdownRemark: {
        group: SearchAndFilterGroup[];
    };
}

export interface SearchLookup {
    // Maps gene symbol to a list of cell line IDs
    geneSymToCellIds: Map<string, number[]>;
    // Maps each of the words associated with a gene to that gene symbol
    // (so many words map to the same gene symbol)
    // used for getting a unique identifier for the geneSymToCellIds map
    structureAndNameToGene: Map<string, string>;
    categoryToIds: Map<string, number[]>
    allSearchableTerms: Set<string>;
}

export enum CategoryLabel {
    KeyStructureAndOrganelle = "Key Structure and Organelle",
    NuclearStructure = "Nuclear Structure",
    Stress = "Stress",
    CardiacStructure = "Cardiac Structure",
    Tools = "Tools",
    Endothelial = "Endothelial",
}

export enum NavBarAnchorType {
    Internal = "internal",
    Download = "download",
    External = "external"
}

export interface NavBarDropdownItem {
    label: string;
    anchorType: NavBarAnchorType;
    href: string;
}

export interface NavBarDropdownItemGroup {
    label: string;
    options: NavBarDropdownItem[];
}