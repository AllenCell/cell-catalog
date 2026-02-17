---
templateKey: cell-line
cell_line_id: 37
status: data complete
clone_number: 172
parental_line: 0
genetic_modifications:
  - gene: tnni1
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0037-172&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0037-172_CofA.pdf
donor_plasmid: https://www.addgene.org/114411/
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-26
images_and_videos:
  images:
    - image: single_plane_image_cl172.jpg
      caption: "Single mid-level plane of live hiPSC-derived cardiomyocytes expressing mEGFP-tagged troponin I, slow skeletal. Twelve days after the onset of differentiation, cells were plated on PEI and laminin coated glass and imaged 15 days later on a spinning-disk confocal microscope (27 days total after the onset of differentiation). Scale bar, 10µm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/265791513
      caption: "Z-stack of live hiPSC-derived cardiomyocytes expressing mEGFP-tagged troponin I, slow skeletal. Twelve days after the onset of differentiation, cells were plated on PEI and laminin coated glass and imaged in 3D 19 days later on a spinning-disk confocal microscope (31 days total after the onset of differentiation). Cells were treated with 15 mM of the myosin inhibitor 2,3-Butanedione monoxime (BDM) to prevent beating during image acquisition. Movie starts at the bottom of the cells and ends at the top. Inset shows detail of sarcomeres in myofibrils. Scale bars, 5 µm and 10 µm for inset and larger field respectively."
    - video: https://player.vimeo.com/video/265791472
      caption: "Time-lapse movie of live hiPSC-derived cardiomyocytes expressing mEGFP-tagged troponin I, slow skeletal. Twelve days after the onset of differentiation, cells were plated on PEI and laminin coated glass and imaged 15 days later on a spinning-disk confocal microscope (27 days total after the onset of differentiation). Cells were imaged continuously with a 100ms exposure time. Inset shows detail of sarcomeres in myofibrils. Scale bars, 5 µm and 10 µm for inset and larger field respectively. Movie plays in real time."
editing_design:
  ncbi_isoforms:
    - N
  cr_rna: AGTCTCCGACCTCACAATAG
  linker: SGSG
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: TNNI1 locus; Bottom: Zoom in on mEGFP insertion site at TNNI1 C-terminus. For more information on tagging transcriptionally silent genes in hiPSCs see: Roberts et al. 2018. Scarless gene tagging of transcriptionally silent genes in hiPSCs to visualize cardiomyocyte sarcomeres in live cells. bioRxiv doi:10.1101/342881"
category_labels: 
 - Cardiac Structure
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: TNNI1_cl.172.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "TNNI1-mEGFP"
      junction: "5'"
      expected_size: "1849"
      confirmed_sequence: "Yes*"
    - edited_gene: "TNNI1-mEGFP"
      junction: "3'"
      expected_size: "1735"
      confirmed_sequence: "Yes"
    - edited_gene: "TNNI1-mEGFP"
      junction: "WT internal"
      expected_size: "644"
      confirmed_sequence: "Yes"
    - edited_gene: "TNNI1-mEGFP"
      junction: "Full junctional allele"
      expected_size: "1391"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid. *5’ junction includes linker region with designed 21bp deletion via MMEJ repair. 1849 bp is expected at the 5’ junction from NHEJ mediated excision."
  ddpcr:
    - tag: TNNI1-mEGFP
      clone: 172
      fp_ratio: 0.5277
      plasmid: 0.0
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 99.7
    - marker: "SOX2"
      positive_cells: 99.8
    - marker: "OCT4"
      positive_cells: 99.1
    - marker: "SSEA-1"
      positive_cells: 1.8
    - marker: "SSEA-3"
      positive_cells: 95.5
    - marker: "TRA-160"
      positive_cells: 99.1
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
    troponin_percent_positive: "92-96 (2)"
    day_of_beating_percent: "100 (3)"
    day_of_beating_range: "d7-d9"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 20, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Ranges observed across multiple experiments are shown for Troponin T and Day of beating initiation; number of experiments is shown in (). "
---