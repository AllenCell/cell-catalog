---
templateKey: cell-line
cell_line_id: 78
status: data complete
date: 2026-07-30T22:18:00.000Z
clone_number: 79
parental_line: 0
genetic_modifications:
  - gene: tomm20
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
  - gene: tuba1b
    tag_location: N-terminus
    fluorescent_tag: mTagRFP-T
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0078-079&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0078-079_CofA.pdf
donor_plasmid: https://www.addgene.org/The_Allen_Institute_for_Cell_Science/
images_and_videos:
  images:
    - image: single_plane_image_cl79.jpg
      caption: Single, mid-level plane of cells in a live hiPS cell colony expressing
        mEGFP-tagged Tom20 and mTagRFP-T-tagged alpha-tubulin. Panels show
        individual channels for Tom20 (left), alpha-tubulin (middle), and the
        overlay of the two (right).  Cells were imaged in 3D on a spinning-disk
        confocal microscope. Scale bar, 5μm.
    - image: Main_cell_line_morphology.jpg
      caption: Viability and colony formation one day and three days post-thaw. Cells
        were treated with ROCK inhibitor for 24 hrs post-thaw.
    - image: ReleaseWestern_AICS-0078_TUBULIN_TOMM20.jpg
  videos:
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        translocase of outer mitochondrial membrane 20 and mTagRFP-T-tagged
        tubulin-alpha 1b. Panels show individual channels for outer
        mitochondrial membrane 20 (left) and tubulin-alpha 1b (middle) and the
        overlay of the two (right). Cells were imaged in 3D on a spinning-disk
        confocal microscope every 3 min and a single plane is shown. Movie plays
        at 1800x real time. Scale bar, 20 µm.
      video: https://player.vimeo.com/video/1079601694
    - caption: Z-stack of live hiPS cell colony expressing mEGFP-tagged translocase of
        outer mitochondrial membrane 20 and mTagRFP-T-tagged tubulin-alpha 1b.
        Panels show individual channels for translocase of outer mitochondrial
        membrane 20 (left) and tubulin-alpha 1b (middle) and the overlay of the
        two (right). Cells were imaged in 3D on a spinning-disk confocal
        microscope. The movie starts at the bottom of the cells and ends at the
        top. Scale bar, 5µm.
      video: https://player.vimeo.com/video/1079600993
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged
        translocase of outer mitochondrial membrane 20 and mTagRFP-T-tagged
        tubulin-alpha 1b. Panels show individual channels for translocase of
        outer mitochondrial membrane 20 (left) and tubulin-alpha 1b (middle) and
        the overlay of the two (right). Cells were imaged in 3D every 3 min on a
        spinning-disk confocal microscope and a single plane is shown. Movie
        plays at 900x real time. Scale bar, 5 µm.
      video: https://player.vimeo.com/video/1079599493
editing_design:
  ncbi_isoforms:
    - null
  cr_rna: AATTGTAAGTGCTCAGAGCT / GATGCACTCACGCTGCGGGA
  linker: GGSGDPPVAT / GGSGGS
  cas9: Wildtype spCas9
  diagrams:
    - title: mEGFP Insert
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: TOMM20 locus with zoom in on mEGFP insertion site at TOMM20
            C-terminal exon. Bottom: TUBA1B locus with zoom in on mTagRFP-T
            insertion site at TUBA1B N-terminus."
genomic_characterization:
  diagrams:
    - title: Schematic of Junctions
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
  amplified_junctions:
    - edited_gene: ""
      junction: 5'
      expected_size: ""
      confirmed_sequence: ""
    - edited_gene: ""
      junction: 3'
      expected_size: ""
      confirmed_sequence: ""
    - edited_gene: ""
      junction: WT
      expected_size: ""
      confirmed_sequence: ""
    - edited_gene: ""
      junction: Full junctional allele
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: ""
  junction_table_caption: PCR amplified 5', 3', WT, and full allele junctions. 5',
    3', and WT junctions were Sanger sequenced to check for precise mEGFP
    insertion. Primers were designed to exclude amplification from the donor
    plasmid.
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate
    heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid:
    KAN/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no
    detectable plasmid integration. RPP30 is known 2n reference gene."
category_labels:
  - Key Structure and Organelle
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-55
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: NANOG
      positive_cells: null
    - marker: SOX2
      positive_cells: null
    - marker: OCT4
      positive_cells: null
    - marker: SSEA-1
      positive_cells: null
    - marker: SSEA-4
      positive_cells: null
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
      percent_positive_cells: null
    - germ_layer: Endoderm
      marker: SOX17
      percent_positive_cells: null
    - germ_layer: Mesoderm
      marker: Brachyury
      percent_positive_cells: null
  trilineage_caption: iPSCs were subjected to a 5-7 day, non-terminal, directed
    differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL
    Technologies, Inc.). Total RNA was isolated from each lineage specific
    differentiation and assayed via ddPCR for the expression of lineage specific
    transcripts; Pax6(Ectoderm), Sox17(Endoderm) and Brachyury(Mesoderm).
  cardiomyocyte_differentiation: null
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to
    cardiomyocytes and observed for initiation of beating starting at day 6. At
    ~day 12, cells were fixed and stained with anti-cardiac Troponin T (BD
    Biosciences) and gating was based on an isotype control. Ranges observed
    across multiple experiments are shown for Troponin T and Day of beating
    initiation; number of experiments is shown in (). "
---
