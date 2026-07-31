---
templateKey: cell-line
cell_line_id: 89
status: data complete
date: 2026-07-30T22:44:00.000Z
clone_number: 61
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
  - gene: clybl-dcas9-krab
    tag_location: NA
    fluorescent_tag: TagBFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0089-061&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0089-061_CofA.pdf
donor_plasmid: https://www.addgene.org/The_Allen_Institute_for_Cell_Science/
images_and_videos:
  images:
    - image: single_plane_image_cl61.jpg
      caption: Single, mid-level plane of cells in a live hiPS cell colony expressing
        mEGFP-tagged fibrillarin, mTagRFP-T-taggednucleophosmin, and
        TagBFP-tagged dCas9-KRAB. Panels show individual channels for
        fibrillarin, nucleophosmin, the overlayof the two, and dCas9-KRAB
        (clockwise from the top left). Cells were imaged in 3D on a
        spinning-disk confocal microscope.Scale bar, 5μm.
    - image: Main_cell_line_morphology.jpg
      caption: Viability and colony formation one day and three days post-thaw. Cells
        were treated with ROCK inhibitor for 24 hrs post-thaw.
    - image: ReleaseWestern_AICS0089_cl061_20190822
        Nucleolus_Triple_dcas9-KRAB_final.jpg
    - image: AICS89_clone61_immuno_20200403_v5.jpg
  videos:
    - video: https://player.vimeo.com/video/442183009
      caption: Z-stack of live hiPS cell colony expressing mEGFP-tagged fibrillarin,
        mTagRFP-T-tagged nucleophosmin, and TagBFP-tagged dCas9-KRAB. Panels
        show individual channels for fibrillarin, nucleophosmin, and the overlay
        of the two (left to right). TagBFP-tagged dCas9-KRAB is not shown here
        because it was used to identify dCas9-KRAB expressing cells and not to
        highlight a structure (see single z-slice image for its expression
        pattern). Cells were imaged in 3D on a spinning-disk confocal
        microscope. Movie starts at the bottom of the cells and ends at the top.
        Scale bar, 5µm.
    - video: https://player.vimeo.com/video/442182527
      caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        fibrillarin, mTagRFP-T-tagged nucleophosmin, and TagBFP-tagged
        dCas9-KRAB. Panels show individual channels for fibrillarin,
        nucleophosmin, and the overlay of the two (left to right). TagBFP-tagged
        dCas9-KRAB is not shown here because it was used to identify dCas9-KRAB
        expressing cells and not to highlight a structure (see single z-slice
        image for its expression pattern). The regions bounded by a dashed line
        are shown at the same scale with increased brightness to highlight
        changes in localization during mitosis. A single, mid-level plane of the
        cells was imaged every 3 min on a spinning-disk confocal microscope.
        Movie plays at 900x real time. Scale bar, 5 µm.
    - video: https://player.vimeo.com/video/442182868
      caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        fibrillarin, mTagRFP-T-tagged nucleophosmin, and TagBFP-tagged
        dCas9-KRAB. Panels show individual channels for fibrillarin,
        nucleophosmin, and the overlay of the two (left to right). TagBFP-tagged
        dCas9-KRAB is not shown here because it was used to identify dCas9-KRAB
        expressing cells and not to highlight a structure (see single z-slice
        image for its expression pattern). Cells were imaged in 3D on a
        spinning-disk confocal microscope every 3 min. A single mid-level plane
        is shown. Movie plays at 1800x real time. Scale bar, 20 µm.
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: AACTGAAGTTCAGCGCTGTC / TCCAGGCTATTCAAGATCTC / TGTTGGAAGGATGAGGAAAT
  linker: KPNSAVDGTAGPGSIAT / KPNSAVDGTAGPGSIAT
  cas9: Wildtype spCas9
  diagrams:
    - title: mEGFP Insert
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: FBL locus with zoom in on mEGFP insertion site at FBL C-terminal
            exon. Middle: NPM1 locus showing 7 NPM1 isoforms with zoom in on
            mTagRFP-T insertion site at NPM1 C-terminal exon. Bottom: CLYBL
            locus showing dCas9-TagBFP-KRAB insertion site at CLYBL safe harbor
            site between exons 2 and 3."
genomic_characterization:
  diagrams:
    - title: Schematic of Junctions
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_generic_insert.png
    - title: Karyotype Analysis
      images:
        - image: AICS-89_cl61_FBL-NPM1-dCas9-KRAB_karyotype.JPG
          caption: After cells banks were created, one vial was thawed and 30 G-banded
            metaphase cells were karyotyped.
  amplified_junctions:
    - edited_gene: FBL-mEGFP
      junction: 5'
      expected_size: "1424"
      confirmed_sequence: yes
    - edited_gene: FBL-mEGFP
      junction: 3'
      expected_size: "1489"
      confirmed_sequence: yes
    - edited_gene: FBL-mEGFP
      junction: WT internal
      expected_size: "1800"
      confirmed_sequence: yes
    - edited_gene: FBL-mEGFP
      junction: Full junctional allele
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: yes
    - edited_gene: NPM1-mTagRFP-T
      junction: 5'
      expected_size: "1489"
      confirmed_sequence: yes
    - edited_gene: NPM1-mTagRFP-T
      junction: 3'
      expected_size: "1581"
      confirmed_sequence: yes
    - edited_gene: NPM1-mTagRFP-T
      junction: WT internal
      expected_size: "2217"
      confirmed_sequence: yes
    - edited_gene: NPM1-mTagRFP-T
      junction: Full junctional allele
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: yes
    - edited_gene: CLYBL-dCas9-KRAB
      junction: 5'
      expected_size: "1875"
      confirmed_sequence: yes
    - edited_gene: CLYBL-dCas9-KRAB
      junction: 3'
      expected_size: "3471"
      confirmed_sequence: yes
    - edited_gene: CLYBL-dCas9-KRAB
      junction: WT internal
      expected_size: "2348"
      confirmed_sequence: yes
    - edited_gene: CLYBL-dCas9-KRAB
      junction: Full junctional allele
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: ""
  junction_table_caption: PCR amplified 5', 3', WT, and full allele junctions. 5',
    3', and WT junctions were Sanger sequenced to check for precise mEGFP
    insertion. Primers were designed to exclude amplification from the donor
    plasmid.
  ddpcr:
    - tag: FBL-mEGFP
      clone: 61
      fp_ratio: 0.463
      plasmid: 0.001
    - tag: NPM1-mTagRFP-T
      clone: 61
      fp_ratio: 0.485
      plasmid: 0.001
    - tag: CLYBL-dCas9-KRAB
      clone: 61
      fp_ratio: 0.538
      plasmid: 0.001
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate
    heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid:
    KAN/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no
    detectable plasmid integration. RPP30 is known 2n reference gene."
category_labels:
  - Tools
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-39
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: NANOG
      positive_cells: 99.8
    - marker: SOX2
      positive_cells: null
    - marker: OCT4
      positive_cells: 99.8
    - marker: SSEA-1
      positive_cells: null
    - marker: SSEA-4
      positive_cells: 100
    - marker: TRA-160
      positive_cells: null
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
    troponin_percent_positive: 78.6 (1)
    day_of_beating_percent: 100 (4)
    day_of_beating_range: d8-d12
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to
    cardiomyocytes and observed for initiation of beating starting at day 6. At
    ~day 12, cells were fixed and stained with anti-cardiac Troponin T (BD
    Biosciences) and gating was based on an isotype control. Ranges observed
    across multiple experiments are shown for Troponin T and Day of beating
    initiation; number of experiments is shown in (). "
---
