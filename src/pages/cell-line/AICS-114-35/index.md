---
templateKey: cell-line
cell_line_id: 114
status: data complete
date: 2025-05-06T22:28:41.417Z
clone_number: 35
parental_line: 0
genetic_modifications:
  - gene: cdh1
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0114-035&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0114-035_CofA.pdf
donor_plasmid: https://www.addgene.org/193921/
images_and_videos:
  images:
    - image: single_plane_image_cl35.jpg
      caption: Single plane image near the top of hiPS cells expressing mEGFP-tagged
        E-cadherin. Cells were imaged live in 3D on a spinning-disk confocal
        microscope. Scale bar, 5 µm.
    - image: AICS-114_cl35_CDH1.jpg
      caption: "Viability and colony formation post-thaw. a-d: Morphological
        abnormalities (indicated by black arrows) may be visible post-thaw (5%
        of population). e-f: Morphology improves the first few passages
        post-thaw when seeding at 1M/10cm dish for three days and 500K
        cells/10cm dish for four days. Morphological abnormalities can be seen
        in 1-5% of colonies in three and four days of growth. Colony morphology
        will resolve with continued passage. Scale bars are as shown."
  videos:
    - caption: Time-lapse movie of a live hiPS cell colony expressing mEGFP-tagged
        E-cadherin. A single plane near the top of the cells was imaged every 3
        min on a spinning-disk confocal microscope. Movie plays at 900x real
        time. Scale bar, 5 µm.
      video: https://player.vimeo.com/video/1079877453
    - caption: Z-stack of a live hiPS cell colony expressing mEGFP-tagged E-cadherin.
        Cells were imaged in 3D on a spinning-disk confocal microscope. The
        movie starts at the bottom of the cells and ends at the top. Scale bar,
        5 µm.
      video: https://player.vimeo.com/video/1079877719
    - caption: Time-lapse movie of a live hiPS cell colony expressing mEGFP-tagged
        E-cadherin. A small mid-level stack of six z-slices was imaged every 3
        min on a spinning-disk confocal microscope. A maximum intensity
        projection of the six z-slices is shown. Bleaching was corrected using
        the histogram matching method in ImageJ. Movie plays at 1800x real time.
        Scale bar, 5 µm.
      video: https://player.vimeo.com/video/1079877956
editing_design:
  ncbi_isoforms:
    - null
  cr_rna: ACGACTAGGGGACTCGAGAG
  linker: LE
  cas9: Wildtype spCas9
  diagrams:
    - title: mEGFP Insert
      images:
        - image: CDH1_gfp.png
          caption: "Top: CDH1 locus showing 4 CDH1 isoforms; Bottom: Zoom in on mEGFP
            insertion site at CDH1 C-terminal exon."
genomic_characterization:
  diagrams:
    - title: Schematic of Junctions
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: Karyotype Analysis
      images:
        - image: AICS-114_cl35_CDH1_karyotype.jpg
          caption: After cells banks were created, one vial was thawed and 30 G-banded
            metaphase cells were karyotyped.
  amplified_junctions:
    - edited_gene: CDH1-mEGFP
      junction: 5'
      expected_size: "1897"
      confirmed_sequence: Yes
    - edited_gene: CDH1-mEGFP
      junction: 3'
      expected_size: "2094"
      confirmed_sequence: Yes
    - edited_gene: CDH1-mEGFP
      junction: WT
      expected_size: "981"
      confirmed_sequence: Yes
    - edited_gene: CDH1-mEGFP
      junction: Full junctional allele
      expected_size: "Tagged: 3525; Untagged: 2805"
      confirmed_sequence: Yes
  junction_table_caption: PCR amplified 5', 3', WT, and full allele junctions. 5',
    3', and WT junctions were Sanger sequenced to check for precise mEGFP
    insertion.
  ddpcr:
    - tag: CDH1-mEGFP
      clone: 35
      fp_ratio: 0.515
      plasmid: null
  ddpcr_caption: FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate
    heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. RPP30 is
    known 2n reference gene.
category_labels:
  - Key Structure and Organelle
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: NANOG
      positive_cells: 99.8
    - marker: SOX2
      positive_cells: 99.9
    - marker: OCT4
      positive_cells: 99.7
    - marker: SSEA-1
      positive_cells: 0.47
    - marker: SSEA-4
      positive_cells: 100
    - marker: TRA-160
      positive_cells: 100
  pluripotency_caption: iPSCs were stained with directly conjugated antibodies
    from BD Biosciences, acquired using a FACSAria III Fusion (BD Biosciences),
    and analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded,
    then marker-specific gates were set according to corresponding
    fluorescence-minus-one (FMO) controls.
  trilineage_differentiation:
    - germ_layer: Ectoderm
      marker: PAX6
      percent_positive_cells: Pass
    - germ_layer: Endoderm
      marker: SOX17
      percent_positive_cells: Pass
    - germ_layer: Mesoderm
      marker: Brachyury
      percent_positive_cells: Pass
  trilineage_caption: iPSCs were subjected to a 5-7 day, non-terminal, directed
    differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL
    Technologies, Inc.). Total RNA was isolated from each lineage specific
    differentiation and assayed via ddPCR for the expression of lineage specific
    transcripts; Pax6(Ectoderm), Sox17(Endoderm) and Brachyury(Mesoderm).
  cardiomyocyte_differentiation:
    troponin_percent_positive: "70.4"
    day_of_beating_percent: 100 (4)
    day_of_beating_range: D8 - D11
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to
    cardiomyocytes and observed for initiation of beating starting at day 6. At
    ~day 12, cells were fixed and stained with anti-cardiac Troponin T (BD
    Biosciences) and gating was based on an isotype control. Ranges observed
    across multiple experiments are shown for Troponin T and Day of beating
    initiation; number of experiments is shown in (). "
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-67
---
