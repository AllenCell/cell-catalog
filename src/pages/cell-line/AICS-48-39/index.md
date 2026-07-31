---
templateKey: cell-line
cell_line_id: 48
status: data complete
date: 2026-07-30T21:51:00.000Z
clone_number: 39
parental_line: 0
genetic_modifications:
  - gene: ttn
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0048-039&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0048-039_CofA.pdf
donor_plasmid: https://www.addgene.org/114412/
images_and_videos:
  images:
    - image: single_plane_image_cl39.jpg
      caption: "Single, mid-level plane of live hiPSC-derived cardiomyocytes
        expressing mEGFP-tagged titin protein. Twelve days after the onset of
        differentiation, cells were plated on PEI and laminin coated glass and
        imaged in 3D on a spinning disk confocal microscope 23 days later (35
        days total after the onset of differentiation). Scale bar, 10 µm. "
    - image: Main_cell_line_morphology.jpg
      caption: Viability and colony formation photographed 3 days post-thaw at 4X
        magnification. Cells were treated with ROCK inhibitor for 24 hrs
        post-thaw.
    - image: ttn_clone39_and_AICS0000_noDAPI.jpg
  videos:
    - video: https://player.vimeo.com/video/287834717
      caption: Z-stack of live hiPSC-derived cardiomyocytes expressing mEGFP-tagged
        titin protein. Twelve days after the onset of differentiation, cells
        were plated on PEI and laminin coated glass and imaged in 3D on a
        spinning disk confocal microscope 23 days later (35 days total after the
        onset of differentiation). Cells were treated with 15 mM of the myosin
        inhibitor 2,3-Butanedione monoxime (BDM) to prevent beating during image
        acquisition. Movie starts at the bottom of the cells and ends at the
        top. Inset shows detail of titan in myofibrils. Scale bars, 10 µm.
    - video: https://player.vimeo.com/video/287834710
      caption: " Time-lapse movie of live hiPSC-derived cardiomyocytes expressing
        mEGFP-tagged titin protein. Twelve days after the onset of
        differentiation, cells were plated on PEI and laminin coated glass and
        imaged on a spinning disk confocal microscope 23 days later (35 days
        total after the onset of differentiation). A single plane of cells was
        imaged continuously with a 100 ms exposure time. Inset shows detail of
        titan in myofibrils. Scale bars, 10 µm. Movie plays in real time."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: ACATATTCGATCCATTTAAG
  linker: SGSG
  cas9: Wildtype spCas9
  diagrams:
    - title: mEGFP Insert
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: TTN locus showing 7 TTN isoforms; Bottom: Zoom in on mEGFP
            insertion site at TTN C-terminus; For more information on tagging
            transcriptionally silent genes in hiPSCs see: Roberts et al. 2018.
            Scarless gene tagging of transcriptionally silent genes in hiPSCs to
            visualize cardiomyocyte sarcomeres in live cells. bioRxiv
            doi:10.1101/342881"
genomic_characterization:
  diagrams:
    - title: Schematic of Junctions
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: Karyotype Analysis
      images:
        - image: ttn_clone39_karyotype.jpg
          caption: After cells banks were created, one vial was thawed and 30 G-banded
            metaphase cells were karyotyped.
  amplified_junctions:
    - edited_gene: TTN-mEGFP
      junction: 5'
      expected_size: "1589"
      confirmed_sequence: 1568, 21bp MMEJ guided in-frame deletion
    - edited_gene: TTN-mEGFP
      junction: 3'
      expected_size: "1553"
      confirmed_sequence: PASS
    - edited_gene: TTN-mEGFP
      junction: WT internal
      expected_size: "559"
      confirmed_sequence: PASS
    - edited_gene: TTN-mEGFP
      junction: Full junctional allele
      expected_size: "2986"
      confirmed_sequence: 2965, 21bp MMEJ guided in-frame deletion
  junction_table_caption: PCR amplified 5', 3', WT, and full allele junctions. 5',
    3', and WT junctions were Sanger sequenced to check for precise mEGFP
    insertion. Primers were designed to exclude amplification from the donor
    plasmid.
  ddpcr:
    - tag: TTN-mEGFP
      clone: 39
      fp_ratio: 0.501
      plasmid: 0.02
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1
    indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone.
    Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with
    no detectable plasmid integration. RPP30 is known 2n reference gene."
category_labels:
  - Cardiac Structure
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-27
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: NANOG
      positive_cells: 99.8
    - marker: SOX2
      positive_cells: 100
    - marker: OCT4
      positive_cells: 99.4
    - marker: SSEA-1
      positive_cells: 0.14
    - marker: SSEA-3
      positive_cells: 98
    - marker: TRA-160
      positive_cells: 99.3
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
    troponin_percent_positive: 79-85 (3)
    day_of_beating_percent: 100 (3)
    day_of_beating_range: d7-d9
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to
    cardiomyocytes and observed for initiation of beating starting at day 6. At
    ~day 12, cells were fixed and stained with anti-cardiac Troponin T (BD
    Biosciences) and gating was based on an isotype control. Ranges observed
    across multiple experiments are shown for Troponin T and Day of beating
    initiation; number of experiments is shown in (). "
---
