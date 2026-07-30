---
templateKey: cell-line
cell_line_id: 31
status: data complete
date: 2026-07-30T13:28:00.000Z
clone_number: 35
parental_line: 0
genetic_modifications:
  - gene: tuba1b
    tag_location: N-terminus
    fluorescent_tag: mTagRFP-T
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0031-035&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0031-035_CofA.pdf
donor_plasmid: https://www.addgene.org/101785/
images_and_videos:
  images:
    - image: single_plane_image_cl35.jpg
      caption: Single image of a live hiPS cell colony expressing mTagRFP-T tagged
        alpha-tubulin imaged on a spinning-disk confocal microscope. Image is a
        single slice from a 3D z-stack in the top half of the cell
    - image: Final_AICS_31_TUBA1B_mTAG__cl35_4x_Phase_D3.jpg
      caption: Viability and colony formation photographed 3 days post-thaw at 4X
        magnification. Cells were treated with ROCK inhibitor for 24 hrs
        post-thaw.
    - image: Western blot documentation TUBA1B-RFPt final clone only_final.jpg
    - image: tubulin mTagRFPt_cl35 - FINAL 081417.jpg
  videos:
    - video: https://player.vimeo.com/video/229759138
      caption: Z-stack of live hiPS cells expressing mTagRFP-T tagged alpha-tubulin
        imaged on a spinning-disk confocal microscope. Movie starts at the
        bottom of the cells and ends at the top.
    - video: https://player.vimeo.com/video/229759137
      caption: Timelapse movie of a live hiPS cell colony expressing mTagRFP-T tagged
        alpha-tubulin. Images were taken in 3D every 5 minutes for 10 hours on a
        spinning-disk confocal microscope. Images are maximum intensity
        projections with the ‘despeckle’ ImageJ filter applied. Movie sped up
        3000x over real time.
editing_design:
  ncbi_isoforms:
    - NM_006082
  cr_rna: GATGCACTCACGCTGCGGGA
  linker: GGSGGS
  cas9: Wildtype spCas9
  diagrams:
    - title: mEGFP Insert
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: TUBA1B locus; Bottom: Zoom in on mTagRFP-T insertion site at
            TUBA1B N-terminus"
genomic_characterization:
  diagrams:
    - title: Schematic of Junctions
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mTag-RFP-T.png
    - title: Karyotype Analysis
      images:
        - image: TUBA1B-mTagRFPt_cl.35.JPG
          caption: After cells banks were created, one vial was thawed and 30 G-banded
            metaphase cells were karyotyped.
  amplified_junctions:
    - edited_gene: TUBA1B-mTagRFP-T
      junction: 5'
      expected_size: "1568"
      confirmed_sequence: Yes
    - edited_gene: TUBA1B-mTagRFP-T
      junction: 3'
      expected_size: "1900"
      confirmed_sequence: Yes
    - edited_gene: TUBA1B-mTagRFP-T
      junction: WT internal
      expected_size: "700"
      confirmed_sequence: Yes
    - edited_gene: TUBA1B-mTagRFP-T
      junction: Full junctional allele
      expected_size: Tagged:3120; Untagged:2391
      confirmed_sequence: Not sequenced
  junction_table_caption: PCR amplified 5', 3', WT, and full allele junctions. 5',
    3', and WT junctions were Sanger sequenced to check for precise mTagRFP-T
    insertion. Primers were designed to exclude amplification from the donor
    plasmid.
  ddpcr:
    - tag: TUBA1B-mTagRFP-T
      clone: 35
      fp_ratio: 0.495
      plasmid: 0.003
  ddpcr_caption: "mTagRFP-T: mTagRFP-T/RPP30 ratio from ddPCR assay; values = 0.5
    +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous
    clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate
    clone with no detectable plasmid integration. RPP30 is known 2n reference
    gene."
category_labels:
  - Key Structure and Organelle
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-16
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: NANOG
      positive_cells: 98.2
    - marker: SOX2
      positive_cells: 97.5
    - marker: OCT4
      positive_cells: 97.4
    - marker: SSEA-1
      positive_cells: 1.09
    - marker: SSEA-3
      positive_cells: 99.6
    - marker: TRA-160
      positive_cells: 96
  pluripotency_caption: iPSCs were stained with directly conjugated antibodies
    from BD Biosciences, acquired using a FACSAria III Fusion (BD Biosciences),
    and analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded,
    then marker-specific gates were set according to corresponding
    fluorescence-minus-one (FMO) controls.
  trilineage_differentiation:
    - germ_layer: Ectoderm
      marker: PAX6
      percent_positive_cells: 91-92 (2)
    - germ_layer: Endoderm
      marker: SOX17
      percent_positive_cells: 83-85 (2)
    - germ_layer: Mesoderm
      marker: Brachyury
      percent_positive_cells: 87-96 (2)
  trilineage_caption: iPSCs were subjected to a 5-7 day, non-terminal, directed
    differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL
    Technologies, Inc.). Cells were stained for markers of Ectoderm, Endoderm,
    and Mesoderm lineages using directly conjugated antibodies from BD
    Biosciences. Gating was based on isotype controls. The number of experiments
    is shown in ().
  cardiomyocyte_differentiation:
    troponin_percent_positive: 85-96 (2)
    day_of_beating_percent: 100 (3)
    day_of_beating_range: d7-d9
  cardiomyocyte_differentiation_caption: iPSCs were differentiated to
    cardiomyocytes and observed for initiation of beating starting at day 6. At
    ~day 20, cells were fixed and stained with anti-cardiac Troponin T (BD
    Biosciences) and gating was based on an isotype control. Range observed
    across multiple experiments is shown for Day of beating initiation; number
    of experiments is shown in ().
---
