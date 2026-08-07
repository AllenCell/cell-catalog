---
templateKey: cell-line
cell_line_id: 84
status: data complete
date: 2026-07-30T22:29:00.000Z
clone_number: 18
parental_line: 0
genetic_modifications:
  - gene: fbl
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
  - gene: npm1
    tag_location: C-terminus
    fluorescent_tag: mTagRFP-T
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0084-018&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0084-018_CofA.pdf
donor_plasmid: https://www.addgene.org/The_Allen_Institute_for_Cell_Science/
images_and_videos:
  images:
    - image: single_plane_image_cl18.jpg
      caption: "Single mid-level plane of live hiPS cell colony expressing
        mEGFP-tagged nucleophosmin. Right panel is the same image as the left
        but with contrast enhanced to visualize dimmer localization in mitotic
        cells. Images are maximum intensity projections through the volume of
        the cells. Cells were imaged in 3D on a spinning-disk confocal
        microscope. Scale bar, 5µm. "
    - image: Main_cell_line_morphology.jpg
      caption: Viability and colony formation photographed 3 days post-thaw at 4X
        magnification. Cells were treated with ROCK inhibitor for 24 hrs
        post-thaw.
    - image: Western blot documentation FBL_NPM1 final clone
        only_final_20190306_edited_20190416_final.jpg
    - image: FBL_NPM1_clone18_andAICS0_20190319_v2.jpg
  videos:
    - video: https://player.vimeo.com/video/333852568
      caption: Z-stack of live hiPS cell colony expressing mEGFP-tagged fibrillarin
        and mTagRFP-T-tagged nucleophosmin. Panels show individual channels for
        fibrillarin (left) and nucleophosmin (middle) and the overlay of the two
        (right). Cells were imaged in 3D on a spinning-disk confocal microscope.
        Movie starts at the bottom of the cells and ends at the top. Scale bar,
        5µm.
    - video: https://player.vimeo.com/video/333852580
      caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        fibrillarin and mTagRFP-T-tagged nucleophosmin. The region bounded by a
        dashed line is shown at the same scale with enhanced contrast to
        highlight changes in localization during mitosis. A single, mid-level
        plane of the cells was imaged every 3 min on a spinning-disk confocal
        microscope. Movie plays at 900x real time. Scale bar, 5 µm.
    - video: https://player.vimeo.com/video/333852631
      caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        fibrillarin and mTagRFP-T-tagged nucleophosmin. Panels show individual
        channels for fibrillarin (left) and nucleophosmin (middle) and the
        overlay of the two (right). Cells were imaged in 3D on a spinning-disk
        confocal microscope every 3 min. Frames are maximum intensity
        z-projections through the entire volume of the cell. Movie plays at
        1800x real time. Scale bar, 20 µm.
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: AACTGAAGTTCAGCGCTGTC / TCCAGGCTATTCAAGATCTC
  linker: KPNSAVDGTAGPGSIAT / KPNSAVDGTAGPGSIAT
  cas9: Wildtype spCas9
  diagrams:
    - title: mEGFP Insert
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: FBL locus with zoom in on mEGFP insertion site at FBL C-terminal
            exon. Bottom: NPM1 locus showing 7 NPM1 isoforms with zoom in on
            mTagRFP-T insertion site at NPM1 C-terminal exon"
genomic_characterization:
  diagrams:
    - title: Schematic of Junctions
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_generic.png
    - title: Karyotype Analysis
      images:
        - image: FBL_NPM1_cl18_final_karyo.JPG
          caption: After cells banks were created, one vial was thawed and 30 G-banded
            metaphase cells were karyotyped.
  amplified_junctions:
    - edited_gene: FBL-mEGFP
      junction: 5'
      expected_size: "1560"
      confirmed_sequence: Yes
    - edited_gene: FBL-mEGFP
      junction: 3'
      expected_size: "1754"
      confirmed_sequence: Yes
    - edited_gene: FBL-mEGFP
      junction: WT internal
      expected_size: "671"
      confirmed_sequence: Yes
    - edited_gene: FBL-mEGFP
      junction: Full junctional allele
      expected_size: Tagged:2925; Untagged:2169
      confirmed_sequence: ""
    - edited_gene: NPM1-mTagRFP-T
      junction: 5'
      expected_size: "1560"
      confirmed_sequence: Yes
    - edited_gene: NPM1-mTagRFP-T
      junction: 3'
      expected_size: "1657"
      confirmed_sequence: Yes
    - edited_gene: NPM1-mTagRFP-T
      junction: WT internal
      expected_size: "1179"
      confirmed_sequence: Yes
    - edited_gene: NPM1-mTagRFP-T
      junction: Full junctional allele
      expected_size: Tagged:WIP; Untagged:WIP
      confirmed_sequence: ""
  junction_table_caption: PCR amplified 5', 3', WT, and full allele junctions. 5',
    3', and WT junctions were Sanger sequenced to check for precise mEGFP
    insertion. Primers were designed to exclude amplification from the donor
    plasmid.
  ddpcr:
    - tag: FBL-mEGFP
      clone: 18
      fp_ratio: 0.534
      plasmid: 0.042
    - tag: NPM1-mTagRFP-T
      clone: 18
      fp_ratio: 0.526
      plasmid: 0.042
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate
    heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid:
    AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no
    detectable plasmid integration. RPP30 is known 2n reference gene."
category_labels:
  - Key Structure and Organelle
  - Nuclear Structure
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-38
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: NANOG
      positive_cells: 99.8
    - marker: SOX2
      positive_cells: 99.9
    - marker: OCT4
      positive_cells: 99.8
    - marker: SSEA-1
      positive_cells: 0.63
    - marker: SSEA-4
      positive_cells: 100
    - marker: TRA-160
      positive_cells: 99.8
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
    troponin_percent_positive: 76.8 (1)
    day_of_beating_percent: 100 (3)
    day_of_beating_range: d11
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to
    cardiomyocytes and observed for initiation of beating starting at day 6. At
    ~day 12, cells were fixed and stained with anti-cardiac Troponin T (BD
    Biosciences) and gating was based on an isotype control. Ranges observed
    across multiple experiments are shown for Troponin T and Day of beating
    initiation; number of experiments is shown in (). "
---
