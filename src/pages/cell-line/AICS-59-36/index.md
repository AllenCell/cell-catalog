---
templateKey: cell-line
cell_line_id: 59
status: data complete
clone_number: 36
parental_line: 0
genetic_modifications:
  - gene: sec61b
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
  - gene: lmnb1
    tag_location: N-terminus
    fluorescent_tag: mTagRFP-T
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0059-036&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0059-036_CofA.pdf
donor_plasmid: https://www.addgene.org/The_Allen_Institute_for_Cell_Science/
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-33
images_and_videos:
  images:
    - image: single_plane_image_cl36.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged Sec61 beta and mTagRFP-T-tagged lamin B1. Panels show individual channels for Sec61 beta (left) and lamin B1 (middle) and the overlay of the two (right). Imaged region captures cells at different stages of the cell cycle to highlight cell cycle-dependent variation in co-localization of Sec61 beta and Lamin B1. Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5 µm. "
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 4 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/307597511
      caption: "Z-stack of a live hiPS cell colony expressing mEGFP-tagged Sec61 beta and mTagRFP-T-tagged lamin B1. Panels show individual channels for Sec61 beta (left) and lamin B1 (middle) and the overlay of the two (right). Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/307168127
      caption: "Time-lapse movie of a live hiPS cell colony expressing mEGFP-tagged Sec61 beta and mTagRFP-T-tagged lamin B1. Panels show individual channels for Sec61 beta (left) and lamin B1 (middle) and the overlay of the two (right). A single, mid-level plane was imaged on a spinning-disk confocal microscope every 5 min. Movie plays at 3000x real time. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/307167915
      caption: "Time-lapse movie of a live hiPS cell colony expressing mEGFP-tagged Sec61 beta and mTagRFP-T-tagged lamin B1. Panels show individual channels for Sec61 beta (left) and lamin B1 (middle) and the overlay of the two (right). Cells were imaged in 3D on a spinning-disk confocal microscope every 5 min. A single mid-level z-section is shown. Movie plays at 1200x real time. Scale bar, 20 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: GCCATACCATATTGGAGATG / GGGGTCGCAGTCGCCATGGC
  linker: SGLRS / SGLRSRAQAS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: SEC61B locus with zoom in on mEGFP insertion site at SEC61B N-terminal exon; Bottom: LMNB1 locus showing 2 LMNB1 isoforms with zoom in on mTagRFP-T insertion site at LMNB1 N-terminal exon"
category_labels: 
  - Key Structure and Organelle
  - Nuclear Structure
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_generic.png
    - title: "Karyotype Analysis"
      images:
        - image: AICS-59DualSec-LMNB1cl.jpg
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "SEC61B-mEGFP"
      junction: "5'"
      expected_size: "1371"
      confirmed_sequence: "perfect"
    - edited_gene: "SEC61B-mEGFP"
      junction: "3'"
      expected_size: "1875"
      confirmed_sequence: "perfect"
    - edited_gene: "SEC61B-mEGFP"
      junction: "WT internal"
      expected_size: "795"
      confirmed_sequence: "perfect"
    - edited_gene: "SEC61B-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Wild Type: 2131; Insert: 2913"
      confirmed_sequence: "perfect"
    - edited_gene: "LMNB1-mTagRFP-T"
      junction: "5'"
      expected_size: "1297"
      confirmed_sequence: "perfect"
    - edited_gene: "LMNB1-mTagRFP-T"
      junction: "3'"
      expected_size: "1260"
      confirmed_sequence: "perfect"
    - edited_gene: "LMNB1-mTagRFP-T"
      junction: "WT internal"
      expected_size: "717"
      confirmed_sequence: "perfect"
    - edited_gene: "LMNB1-mTagRFP-T"
      junction: "Full junctional allele"
      expected_size: "Wild Type: 1906; Insert: 2739"
      confirmed_sequence: "perfect"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP and mTagRFP-T insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: SEC61B-mEGFP
      clone: 36
      fp_ratio: 0.533
      plasmid: 0.002
    - tag: LMNB1-mTagRFP-T
      clone: 36
      fp_ratio: 0.561
      plasmid: 0.002
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 99.95
    - marker: "SOX2"
      positive_cells: 99.97
    - marker: "OCT4"
      positive_cells: 99.91
    - marker: "SSEA-1"
      positive_cells: 1.86
    - marker: "SSEA-3"
      positive_cells: 99.98
    - marker: "TRA-160"
      positive_cells: 9.99
  pluripotency_caption: "iPSCs were stained with directly conjugated antibodies from BD Biosciences, acquired using a FACSAria III Fusion (BD Biosciences), and analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded, then marker-specific gates were set according to corresponding fluorescence-minus-one (FMO) controls."
  trilineage_differentiation:
    - germ_layer: "Ectoderm"
      marker: "PAX6"
      percent_positive_cells: pass
    - germ_layer: "Endoderm"
      marker: "SOX17"
      percent_positive_cells: pass
    - germ_layer: "Mesoderm"
      marker: "Brachyury"
      percent_positive_cells: pass
  trilineage_caption: "iPSCs were subjected to a 5-7 day, non-terminal, directed differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL Technologies, Inc.). Total RNA was isolated from each lineage specific differentiation and assayed via ddPCR for the expression of lineage specific transcripts; Pax6(Ectoderm), Sox17(Endoderm) and Brachyury(Mesoderm)."
  cardiomyocyte_differentiation:
    troponin_percent_positive: "86.2-91.3 (2)"
    day_of_beating_percent: "100 (3)"
    day_of_beating_range: "d8-d11"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 12, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Ranges observed across multiple experiments are shown for Troponin T and Day of beating initiation; number of experiments is shown in (). "
---