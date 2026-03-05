import { formatCellLineId } from "../utils";
import { getThumbnail } from "../utils/mediaUtils";
import {
    DiseaseCellLineNode,
    GeneFrontmatter,
    GeneticModification,
    LookupGroup,
    NormalCellLineNode,
    SearchAndFilterGroup,
    SearchLookup,
    UnpackedDiseaseCellLine,
    UnpackedGene,
    UnpackedNormalCellLine,
} from "./types";

export const extractGeneticModifications = (
    modifications?: GeneticModification[],
): {
    taggedGenes: UnpackedGene[];
    alleleCounts: string[];
    tagLocations: string[];
    fluorescentTags: string[];
} => {
    if (!modifications || !modifications.length)
        return {
            taggedGenes: [],
            alleleCounts: [],
            tagLocations: [],
            fluorescentTags: [],
        };

    return {
        taggedGenes: modifications
            .filter((mod) => mod.gene && mod.gene.frontmatter)
            .map((mod) => ({
                name: mod.gene.frontmatter.name,
                symbol: mod.gene.frontmatter.symbol,
                structure: mod.gene.frontmatter.structure,
                protein: mod.gene.frontmatter.protein,
            })),
        alleleCounts: modifications.map((mod) => mod.allele_count),
        tagLocations: modifications.map((mod) => mod.tag_location),
        fluorescentTags: modifications.map((mod) => mod.fluorescent_tag),
    };
};

export const convertFrontmatterToDiseaseCellLine = (
    cellLineNode: DiseaseCellLineNode,
): UnpackedDiseaseCellLine => {
    const diseaseData = cellLineNode.frontmatter.disease.frontmatter;
    const mutatedGenes = diseaseData.gene
        .filter((gene) => gene && gene.frontmatter)
        .map((gene) => ({
            name: gene.frontmatter.name,
            symbol: gene.frontmatter.symbol,
            structure: gene.frontmatter.structure,
            protein: gene.frontmatter.protein,
        }));
    const { alleleCounts, fluorescentTags, taggedGenes, tagLocations } =
        extractGeneticModifications(
            cellLineNode.frontmatter.parental_line.frontmatter
                .genetic_modifications,
        );

    return {
        cellLineId: cellLineNode.frontmatter.cell_line_id,
        certificateOfAnalysis: cellLineNode.frontmatter.certificate_of_analysis,
        healthCertificate: cellLineNode.frontmatter.hpscreg_certificate_link,
        snp: cellLineNode.frontmatter.snp,
        status: cellLineNode.frontmatter.status,
        clones: cellLineNode.frontmatter.clones,
        orderLink: cellLineNode.frontmatter.order_link,
        diseaseStatus: diseaseData.status,
        mutatedGenes: mutatedGenes,
        path: cellLineNode.fields.slug,
        parentalLine: {
            thumbnailImage: getThumbnail(
                cellLineNode.frontmatter.parental_line.frontmatter
                    .images_and_videos,
            ),
            cellLineId:
                cellLineNode.frontmatter.parental_line.frontmatter.cell_line_id,
            cloneNumber:
                cellLineNode.frontmatter.parental_line.frontmatter.clone_number,
            taggedGenes,
            alleleCounts,
            tagLocations,
            fluorescentTags,
        },
        key: cellLineNode.id,
    };
};

export const convertFrontmatterToNormalCellLines = ({
    node: cellLineNode,
}: {
    node: NormalCellLineNode;
}): UnpackedNormalCellLine => {
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
        healthCertificate: cellLineNode.frontmatter.hpscreg_certificate_link,
        orderLink: cellLineNode.frontmatter.order_link,
        orderPlasmid: cellLineNode.frontmatter.donor_plasmid,
        thumbnailImage: getThumbnail(
            cellLineNode.frontmatter.images_and_videos,
        ),
        imagesAndVideos: cellLineNode.frontmatter.images_and_videos,
        categoryLabels: cellLineNode.frontmatter.category_labels,
    };
};

export const createLookupMappings = (
    data: SearchAndFilterGroup[],
): SearchLookup => {
    const geneSymToCellIds = new Map();
    const structureAndNameToGene = new Map();
    const categoryToIds = new Map();
    const allSearchableTerms: Set<string> = new Set();
    data.forEach((group: SearchAndFilterGroup) => {
        const symbol = group.fieldValue;
        allSearchableTerms.add(symbol);
        const cellLines: number[] = [];
        group.edges.forEach((edge: LookupGroup) => {
            const cellLineId = edge.node.frontmatter.cell_line_id;
            cellLines.push(cellLineId);
            if (cellLineId) {
                allSearchableTerms.add(formatCellLineId(cellLineId));
            }
            const categories = edge.node.frontmatter.category_labels;
            if (categories) {
                categories.forEach((category: string) => {
                    allSearchableTerms.add(category);
                    if (cellLineId) {
                        const set = categoryToIds.get(category) || new Set();
                        set.add(cellLineId);
                        categoryToIds.set(category, set);
                    }
                });
            }
            const genes = edge.node.frontmatter.genetic_modifications || [];
            genes.forEach((obj: { gene: { frontmatter: GeneFrontmatter } }) => {
                const gene = obj.gene;
                const geneSymbol = gene.frontmatter.symbol;
                const geneName = gene.frontmatter.name;
                const geneProtein = gene.frontmatter.protein;
                const geneStructure = gene.frontmatter.structure;
                allSearchableTerms.add(geneSymbol);
                structureAndNameToGene.set(geneName, geneSymbol);
                structureAndNameToGene.set(geneProtein, geneSymbol);
                allSearchableTerms.add(geneName);
                if (geneProtein) {
                    allSearchableTerms.add(geneProtein);
                }
                if (geneStructure) {
                    structureAndNameToGene.set(geneStructure, geneSymbol);
                    allSearchableTerms.add(geneStructure);
                }
            });
        });
        geneSymToCellIds.set(symbol, cellLines);
    });

    return {
        geneSymToCellIds,
        structureAndNameToGene,
        allSearchableTerms,
        categoryToIds,
    };
};
