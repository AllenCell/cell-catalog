import { isEmpty } from "lodash";

import { extractGeneticModifications } from "../../component-queries/convert-data";
import {
    Clone,
    DiagramList,
    DiseaseCellLineNode,
    GenomicCharacterizationFrontmatter,
    NormalCellLineNode,
    ParentLine,
    ParentalLineFrontmatter,
    Sequence,
    SingleImageDiagram,
    StemCellCharacteristicsFrontmatter,
} from "../../component-queries/types";
import { hasTableData, nonEmptyArray } from "../../utils";
import { getThumbnail } from "../../utils/mediaUtils";
import { DiagramCardProps } from "../shared/DiagramCard";
import { PERCENT_POS_CAPTION } from "./stem-cell-table-constants";
import {
    CardiomyocyteDifferentiationData,
    ClonePercentPositive,
    PluripotencyAnalysisData,
    TrilineageDifferentiationData,
    UnpackedDiseaseCellLineFull,
    UnpackedEditingDesign,
    UnpackedGenomicCharacterization,
    UnpackedNormalCellLineFull,
    UnpackedStemCellCharacteristics,
} from "./types";

export const unpackDiagrams = (
    diagrams?: SingleImageDiagram[],
): DiagramCardProps[] => {
    if (!diagrams || diagrams.length === 0) {
        return [];
    }
    return diagrams.map((diagram) => {
        return {
            title: diagram.title,
            caption: diagram.caption,
            image: diagram.image,
        };
    });
};

export const unpackMultiImageDiagrams = (
    diagrams?: DiagramList[],
): DiagramCardProps[] => {
    if (!diagrams || diagrams.length === 0) {
        return [];
    }

    const result: DiagramCardProps[] = [];

    diagrams.forEach((diagram) => {
        if (!diagram.images || diagram.images.length === 0) {
            return;
        }

        diagram.images.forEach((imageObj, index) => {
            result.push({
                title: index === 0 ? diagram.title : "",
                caption: imageObj.caption,
                image: imageObj.image,
            });
        });
    });

    return result;
};

// subpage data
export const unpackEditingDesignData = (editing_design?: {
    cr_rna_target_site?: string;
    dna_donor_sequence?: Sequence[];
    cas9?: string;
    f_primer?: string;
    r_primer?: string;
    diagrams?: DiagramList[];
    cr_rna?: string;
    linker?: string;
    ncbi_isoforms?: string;
}): UnpackedEditingDesign | null => {
    if (!editing_design) {
        return null;
    }
    const diagrams = unpackMultiImageDiagrams(editing_design.diagrams);
    const data = {
        crRnaTargetSite: editing_design.cr_rna_target_site,
        dnaDonorSequence: editing_design.dna_donor_sequence,
        cas9: editing_design.cas9,
        fPrimer: editing_design.f_primer,
        rPrimer: editing_design.r_primer,
        crRNA: editing_design.cr_rna,
        linker: editing_design.linker,
        ncbiIsoforms: editing_design.ncbi_isoforms,
        diagrams: diagrams.length > 0 ? diagrams : undefined, // an empty array is still truthy
    };

    if (isEmpty(data)) {
        return null;
    } else {
        return data;
    }
};

export const unpackGenomicCharacterization = (
    gc?: GenomicCharacterizationFrontmatter,
): UnpackedGenomicCharacterization | null => {
    if (!gc) {
        return null;
    }

    const diagrams = unpackMultiImageDiagrams(gc.diagrams);
    const amplifiedJunctionsData = {
        caption: gc.junction_table_caption,
        data: (gc.amplified_junctions ?? []).map((junction) => {
            return {
                editedGene: junction.edited_gene,
                junction: junction.junction,
                expectedSize: junction.expected_size,
                confirmedSequence: junction.confirmed_sequence,
            };
        }),
    };
    const ddpcrData = {
        caption: gc.ddpcr_caption,
        data: (gc.ddpcr ?? []).map((ddpcr) => {
            return {
                tag: ddpcr.tag,
                clone: ddpcr.clone,
                fpRatio: ddpcr.fp_ratio,
                plasmid: ddpcr.plasmid,
                key: ddpcr.clone,
            };
        }),
    };
    const crRnaOffTargetsData = {
        caption: gc.off_targets_caption,
        data: (gc.cr_rna_off_targets ?? []).map((offTarget) => {
            return {
                clonesAnalyzed: offTarget.clones_analyzed,
                offTargetsSequenced: offTarget.off_targets_sequenced_per_clone,
                totalSitesSequenced: offTarget.total_sites_sequenced,
                mutationsIdentified: offTarget.mutations_identified,
            };
        }),
    };
    const data = {
        amplifiedJunctions: hasTableData(amplifiedJunctionsData)
            ? amplifiedJunctionsData
            : undefined,
        ddpcr: hasTableData(ddpcrData) ? ddpcrData : undefined,
        crRnaOffTargets: hasTableData(crRnaOffTargetsData)
            ? crRnaOffTargetsData
            : undefined,
        diagrams: nonEmptyArray(diagrams) ? diagrams : undefined,
    };

    return data;
};

export const getStemCellCharData = (
    clones: Clone[],
): UnpackedStemCellCharacteristics | null => {
    const init: {
        percentPositive: ClonePercentPositive[];
        passingAntibodies: string[];
        differentiation: TrilineageDifferentiationData[];
    } = {
        percentPositive: [],
        passingAntibodies: [],
        differentiation: [],
    };
    const collectedData = clones.reduce((acc, clone) => {
        const cloneNumber = clone.clone_number;
        if (cloneNumber === undefined) {
            return acc;
        }
        if (clone.positive_cells !== undefined) {
            acc.percentPositive.push({
                cloneNumber,
                value: clone.positive_cells,
            });
        }
        return acc;
    }, init);

    if (
        collectedData.percentPositive.length === 0 &&
        collectedData.passingAntibodies.length === 0 &&
        collectedData.differentiation.length === 0
    ) {
        return null;
    }

    return {
        pluripotencyAnalysis: { caption: "", data: [] },
        trilineageDifferentiation: { caption: "", data: [] },
        cardiomyocyteDifferentiation: { caption: "", data: [] },
        rnaSeqAnalysis: [],
        diseaseCardioMyocyteDifferentiation: {
            caption: PERCENT_POS_CAPTION,
            data: [
                {
                    percentPositive: collectedData.percentPositive,
                    passingAntibodies: collectedData.passingAntibodies,
                    differentiation: collectedData.differentiation,
                },
            ],
        },
    };
};

export const unpackParentLineFromFrontmatter = (
    data: ParentalLineFrontmatter,
): ParentLine => {
    const { alleleCounts, fluorescentTags, taggedGenes, tagLocations } =
        extractGeneticModifications(data.genetic_modifications);
    const thumbnailImage = getThumbnail(data.images_and_videos);
    const cellLineId = data.cell_line_id;
    const cloneNumber = data.clone_number;
    return {
        thumbnailImage,
        cellLineId,
        cloneNumber,
        taggedGenes,
        alleleCounts,
        tagLocations,
        fluorescentTags,
    };
};

export const unpackNormalStemCellCharacteristics = (
    scc?: StemCellCharacteristicsFrontmatter,
): UnpackedStemCellCharacteristics | null => {
    if (!scc) return null;

    const pluripotencyAnalysis: PluripotencyAnalysisData = {
        caption: scc.pluripotency_caption,
        data: (scc.pluripotency_analysis ?? []).map((row) => ({
            marker: row.marker,
            positiveCells: row.positive_cells,
        })),
    };

    const trilineageDifferentiation: TrilineageDifferentiationData = {
        caption: scc.trilineage_caption,
        data: (scc.trilineage_differentiation ?? []).map((row) => ({
            germLayer: row.germ_layer,
            marker: row.marker,
            percentPositiveCells: row.percent_positive_cells,
            key: `${row.germ_layer}-${row.marker}`,
        })),
    };

    const cardiomyocyteDifferentiation: CardiomyocyteDifferentiationData = {
        caption: scc.cardiomyocyte_differentiation_caption,
        data: scc.cardiomyocyte_differentiation
            ? [
                {
                    troponinPercentPositive:
                        scc.cardiomyocyte_differentiation
                            .troponin_percent_positive,
                    dayOfBeatingPercent:
                        scc.cardiomyocyte_differentiation
                            .day_of_beating_percent,
                    dayOfBeatingRange:
                        scc.cardiomyocyte_differentiation
                            .day_of_beating_range,
                    key: "0",
                },
            ]
            : [],
    };

    const rnaSeqAnalysis: DiagramCardProps[] = (scc.rnaseq_analysis ?? []).map(
        (item) => ({
            title: "RNASEQ", // TODO get appropriate title for this card
            image: item.image,
            caption: item.caption,
        }),
    );

    return {
        pluripotencyAnalysis,
        trilineageDifferentiation,
        cardiomyocyteDifferentiation,
        rnaSeqAnalysis,
        diseaseCardioMyocyteDifferentiation: { caption: "", data: [] },
    };
};

export const unpackNormalFrontmatterForSubpage = (
    cellLineNode: NormalCellLineNode,
): UnpackedNormalCellLineFull => {
    const { alleleCounts, fluorescentTags, taggedGenes, tagLocations } =
        extractGeneticModifications(
            cellLineNode.frontmatter.genetic_modifications,
        );
    const proteins = taggedGenes
        .map((gene) => gene.protein)
        .filter((protein): protein is string => protein !== undefined);

    const structures = taggedGenes
        .map((gene) => gene.structure)
        .filter((structure): structure is string => structure !== undefined);

    const editingDesign = unpackEditingDesignData(
        cellLineNode.frontmatter.editing_design,
    );

    const genomicCharacterization = unpackGenomicCharacterization(
        cellLineNode.frontmatter.genomic_characterization,
    );

    const stemCellCharacteristics = unpackNormalStemCellCharacteristics(
        cellLineNode.frontmatter.stem_cell_characteristics,
    );

    return {
        key: `${cellLineNode.frontmatter.cell_line_id}-${cellLineNode.frontmatter.clone_number}`,
        path: cellLineNode.fields.slug,
        cellLineId: cellLineNode.frontmatter.cell_line_id,
        cloneNumber: cellLineNode.frontmatter.clone_number,
        taggedGenes: taggedGenes,
        alleleCounts: alleleCounts,
        tagLocations: tagLocations,
        fluorescentTags: fluorescentTags,
        parentalLine: cellLineNode.frontmatter.parental_line.frontmatter.name,
        proteins: proteins,
        structures: structures,
        status: cellLineNode.frontmatter.status,
        certificateOfAnalysis: cellLineNode.frontmatter.certificate_of_analysis,
        healthCertificate: cellLineNode.frontmatter.eu_hpsc_reg,
        orderLink: cellLineNode.frontmatter.order_link,
        orderPlasmid: cellLineNode.frontmatter.donor_plasmid,
        thumbnailImage: getThumbnail(
            cellLineNode.frontmatter.images_and_videos,
        ),
        imagesAndVideos: cellLineNode.frontmatter.images_and_videos,
        editingDesign: editingDesign,
        genomicCharacterization: genomicCharacterization,
        stemCellCharacteristics: stemCellCharacteristics,
    };
};

export const unpackDiseaseFrontmatterForSubpage = (
    cellLineNode: DiseaseCellLineNode,
): UnpackedDiseaseCellLineFull => {
    const { name: geneName, symbol: geneSymbol } =
        cellLineNode.frontmatter.disease.frontmatter.gene[0].frontmatter;

    const editingDesign = unpackEditingDesignData(
        cellLineNode.frontmatter.editing_design,
    );
    const genomicCharacterization = {
        diagrams: unpackDiagrams(
            cellLineNode.frontmatter.genomic_characterization?.diagrams,
        ),
    };
    const stemCellCharacteristics = getStemCellCharData(
        cellLineNode.frontmatter.clones,
    );
    const parentalLine = unpackParentLineFromFrontmatter(
        cellLineNode.frontmatter.parental_line.frontmatter,
    );
    return {
        path: cellLineNode.fields.slug,
        cellLineId: cellLineNode.frontmatter.cell_line_id,
        status: cellLineNode.frontmatter.status,
        certificateOfAnalysis: cellLineNode.frontmatter.certificate_of_analysis,
        healthCertificate: cellLineNode.frontmatter.hPSCreg_certificate_link,
        orderLink: cellLineNode.frontmatter.order_link,
        geneName: geneName,
        geneSymbol: geneSymbol,
        diseaseName: cellLineNode.frontmatter.disease.frontmatter.name,
        snp: cellLineNode.frontmatter.snp,
        parentalLine: parentalLine,
        clones: cellLineNode.frontmatter.clones, // TODO: unpack this into only data needed for card
        imagesAndVideos: cellLineNode.frontmatter.images_and_videos,
        editingDesign: editingDesign,
        genomicCharacterization: genomicCharacterization,
        stemCellCharacteristics: stemCellCharacteristics,
    };
};
