---
templateKey: cell-line
cell_line_id: 96
status: data complete
date: 2025-05-06T21:01:17.772Z
clone_number: 74
parental_line: 0
genetic_modifications:
  - gene: polr2a
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0096-074&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0096-074_CofA.pdf
donor_plasmid: https://www.addgene.org/164500/
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-47
images_and_videos:
  images:
    - image: single_plane_image_cl74.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged RPB1. Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 50μm"
    - image: AICS-96_cl74_POLR2A_final.jpg
      caption: "Viability and colony formation one day and three days post-thaw. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - caption: Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged RPB1.
        A small mid-level stack of four z-slices was imaged every 3 min on a
        spinning-disk confocal microscope. A maximum intensity projection of the
        four z-slices is shown. Movie plays at 1800x real time. Scale bar, 5 µm.
      video: https://player.vimeo.com/video/1081987377
    - video: https://player.vimeo.com/video/1081988227
      caption: Z-stack of live hiPS cell colony expressing mEGFP-tagged RPB1. Cells
        were imaged in 3D on a spinning-disk confocal microscope. Movie starts
        at the bottom of the cells and ends at the top. Scale bar, 5µm.
    - video: https://player.vimeo.com/video/1081988571
      caption: Time-lapse movie of a live hiPS cell colony expressing mEGFP-tagged
        RPB1. Cells were imaged in 3D on a spinning-disk confocal microscope
        every 3 min. A single mid-level plane is shown. Movie plays at 1800x
        real time. Scale bar, 20 µm.
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: CGCCTGCCTCCGCCATGCAC
  linker: SGLRSRAQASNSAVDGTAGPGSTGSS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: POLR2A locus; Bottom: Zoom in on mEGFP insertion site at POLR2A N-terminal exon"
category_labels: 
 - Nuclear Structure
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: AICS-96_cl74_POLR2A_karyotype.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "POLR2A-mEGFP"
      junction: "5'"
      expected_size: "1878"
      confirmed_sequence: "yes"
    - edited_gene: "POLR2A-mEGFP"
      junction: "3'"
      expected_size: "1573"
      confirmed_sequence: "yes"
    - edited_gene: "POLR2A-mEGFP"
      junction: "WT internal"
      expected_size: "1275"
      confirmed_sequence: "yes"
    - edited_gene: "POLR2A-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: "yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: POLR2A-mEGFP
      clone: 74
      fp_ratio: 0.598
      plasmid: 0.0
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: KAN/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 99.5
    - marker: "SOX2"
      positive_cells: 100
    - marker: "OCT4"
      positive_cells: 99.5
    - marker: "SSEA-1"
      positive_cells: 0.99
    - marker: "SSEA-4"
      positive_cells: 100
    - marker: "TRA-160"
      positive_cells: 98.4
  pluripotency_caption: "iPSCs were stained with directly conjugated antibodies from BD Biosciences, acquired using a FACSAria III Fusion (BD Biosciences), and analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded, then marker-specific gates were set according to corresponding fluorescence-minus-one (FMO) controls."
  trilineage_differentiation:
    - germ_layer: "Ectoderm"
      marker: "PAX6"
      percent_positive_cells: Pass
    - germ_layer: "Endoderm"
      marker: "SOX17"
      percent_positive_cells: Pass
    - germ_layer: "Mesoderm"
      marker: "Brachyury"
      percent_positive_cells: Pass
  trilineage_caption: "iPSCs were subjected to a 5-7 day, non-terminal, directed differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL Technologies, Inc.). Total RNA was isolated from each lineage specific differentiation and assayed via ddPCR for the expression of lineage specific transcripts; Pax6(Ectoderm), Sox17(Endoderm) and Brachyury(Mesoderm)."
  cardiomyocyte_differentiation:
    troponin_percent_positive: "77.6 (2)"
    day_of_beating_percent: "100 (4)"
    day_of_beating_range: "d10-d12"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 12, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Ranges observed across multiple experiments are shown for Troponin T and Day of beating initiation; number of experiments is shown in (). "
---