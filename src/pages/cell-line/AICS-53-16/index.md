---
templateKey: cell-line
cell_line_id: 53
status: data complete
clone_number: 16
parental_line: 0
genetic_modifications:
  - gene: gja1
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0053-016&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0053-016_CofA.pdf
donor_plasmid: https://www.addgene.org/109120/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-22
images_and_videos:
  images:
    - image: single_plane_image_cl16.jpg
      caption: "Single-plane of live hiPS cell colony expressing mEGFP-tagged GJA1 near the top of cells. Left: Contrast optimized to view connexin at apical cell-cell junctions. Right: The same image with contrast enhanced to show intracellular localization of connexin. Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5µm. "
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/265782337
      caption: "Z-stack of live hiPS cell colony expressing mEGFP-tagged connexin-43. Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/265782351
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged connexin-43. Cells were imaged in 3D on a spinning-disk confocal microscope every 3.25 min. Image is a maximum intensity projection of 20 z-sections (5.51 µm) acquired at the top of the cells. Contrast is enhanced to show localization of connexin-43 to internal structures Frames were histogram matched to adjust for photobleaching. Movie plays at 975x real time. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/265782365
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged connexin-43. Cells were imaged in 3D on a spinning-disk confocal microscope every 3 min. Image is a maximum intensity projection through the entire cell volume. Contrast is enhanced to show localization of connexin-43 to internal structures. Movie plays at 1800x real time. Scale bar, 10 µm."
editing_design:
  ncbi_isoforms:
    - N
  cr_rna: CAGACCTCGCCCAGACGACC
  linker: DPPVAT
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: GJA1 locus; Bottom: Zoom in on mEGFP insertion site at GJA1 C-terminus"
category_labels: 
 - Key Structure and Organelle
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: GJA1_cl.16.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "GJA1-mEGFP"
      junction: "5'"
      expected_size: "1500"
      confirmed_sequence: "Pass"
    - edited_gene: "GJA1-mEGFP"
      junction: "3'"
      expected_size: "1500"
      confirmed_sequence: "Pass"
    - edited_gene: "GJA1-mEGFP"
      junction: "WT internal"
      expected_size: "400"
      confirmed_sequence: "Pass(pseudogene present*)"
    - edited_gene: "GJA1-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:2800; Untagged:2100"
      confirmed_sequence: ""
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid. *Presence of GJA1 pseudogene resulted in mixed peaks for the WT junction; these mixed peaks correspond to mismtaches b/w WT GJA1 and the GJA1 pseudogene and not mis-editing or off-target cutting"
  ddpcr:
    - tag: GJA1-mEGFP
      clone: 16
      fp_ratio: 0.49
      plasmid: 0.0
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 99.9
    - marker: "SOX2"
      positive_cells: 99.9
    - marker: "OCT4"
      positive_cells: 96.9
    - marker: "SSEA-1"
      positive_cells: 0.3
    - marker: "SSEA-3"
      positive_cells: 97.9
    - marker: "TRA-160"
      positive_cells: 97.8
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
    troponin_percent_positive: "90.1 (7)"
    day_of_beating_percent: "100 (7)"
    day_of_beating_range: "D7"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 20, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Ranges observed across multiple experiments are shown for Troponin T and Day of beating initiation; number of experiments is shown in (). "
---