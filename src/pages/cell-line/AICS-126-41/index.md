---
templateKey: cell-line
cell_line_id: 126
status: data complete
date: 2026-07-30T12:48:00.000Z
clone_number: 41
parental_line: 0
genetic_modifications:
  - gene: cdh5
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: bi
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0126-041&Product=iPSC&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0126-041_CofA.pdf
donor_plasmid: null
images_and_videos:
  images:
    - image: single_plane_image_cl41.png
      caption: Single, mid-level plane of hiPSC-derived endothelial cells expressing
        mEGFP-tagged VE-cadherin (scalebar, 20 µm). Five days after the onset of
        differentiation, cells were magnetically sorted using CD144 antibodies
        and subsequently cryopreserved. Upon thawing, the cells were grown on
        fibronectin-coated tissue culture plates until they reached confluence.
        They were then re-plated onto fibronectin-coated glass plates and imaged
        four days later. Cells were imaged live in 3D on a spinning-disk
        confocal microscope.
    - image: AICS-126_cl41_CDH5.jpg
      caption: One vial of distribution lot was thawed (cells were treated with ROCK
        inhibitor for 24hrs post-thaw-refer to culture protocol). Cultures were
        observed daily. Colonies were imaged one and three days post-thaw using
        a Leica microscope at 4x and 10x magnification.
    - image: ReleaseWestern_AICS0126_CDH5_cl41_bi_V3.jpg
    - image: IF_cdh5_clone41_andAICS0000.jpg
  videos: null
editing_design:
  ncbi_isoforms:
    - null
  cr_rna: GGAGGAGCTGCTGTATTAGG
  linker: N/A
  cas9: Wildtype spCas9
  diagrams:
    - title: mEGFP Insert
      images:
        - image: CDH5_GFP.png
          caption: "Top: CDH5 locus showing 3 CDH5 isoforms; Bottom: Zoom in on mEGFP
            insertion site at CDH5 C-terminal exon."
genomic_characterization:
  diagrams:
    - title: Schematic of Junctions
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: GFP-tagged and untagged alleles
      images:
        - image: CDH5_cl41_full_allele.jpg
          caption: Junctional PCR primers complementary to sequences flanking the homology
            arms in the distal genome were used together to amplify the tagged
            allele. Gel shows untagged allele in an unedited control and tagged
            allele (larger band) from single PCR reaction. (1% Agarose gel with
            Thermo Fisher 1kb ladder). Clone 41 is available from Coriell.
    - title: Karyotype Analysis
      images:
        - image: AICS-126_cl41_CDH5_karyotype.jpg
          caption: After cells banks were created, one vial was thawed and 30 G-banded
            metaphase cells were karyotyped.
  amplified_junctions:
    - edited_gene: CDH5-mEGFP
      junction: 5'
      expected_size: "1477"
      confirmed_sequence: Yes
    - edited_gene: CDH5-mEGFP
      junction: 3'
      expected_size: "1304"
      confirmed_sequence: Yes
    - edited_gene: CDH5-mEGFP
      junction: WT
      expected_size: "1355"
      confirmed_sequence: Yes
    - edited_gene: CDH5-mEGFP
      junction: Full junctional allele
      expected_size: "2528"
      confirmed_sequence: Yes
  junction_table_caption: PCR amplified 5', 3', WT, and full allele junctions. 5',
    3', and WT junctions were Sanger sequenced to check for precise mEGFP
    insertion.
  ddpcr:
    - tag: CDH5-mEGFP
      clone: 41
      fp_ratio: 1.07
      plasmid: null
  ddpcr_caption: FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate
    heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. RPP30 is
    known 2n reference gene.
category_labels:
  - Endothelial
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-66
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: NANOG
      positive_cells: 98.1
    - marker: SOX2
      positive_cells: 99.6
    - marker: OCT4
      positive_cells: 96.9
    - marker: SSEA-1
      positive_cells: 0.029
    - marker: SSEA-4
      positive_cells: 99.9
  pluripotency_caption: iPSCs were stained with directly conjugated antibodies
    from BD Biosciences, acquired using a CytoFLEX (Beckman Coulter), and
    analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded,
    then marker-specific gates were set according to corresponding
    fluorescence-minus-one (FMO) controls.
  trilineage_differentiation:
    - germ_layer: Ectoderm
      marker: PAX6
      percent_positive_cells: 98.4
    - germ_layer: Endoderm
      marker: SOX17
      percent_positive_cells: 93.8
    - germ_layer: Mesoderm
      marker: Brachyury
      percent_positive_cells: 95.1
  trilineage_caption: iPSCs were subjected to a 5-7 day, non-terminal, directed
    differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL
    Technologies, Inc.). Total RNA was isolated from each lineage specific
    differentiation and assayed via ddPCR for the expression of lineage specific
    transcripts; Pax6(Ectoderm), Sox17(Endoderm) and Brachyury(Mesoderm).
  cardiomyocyte_differentiation: null
  cardiomyocyte_differentiation_caption: " "
---
