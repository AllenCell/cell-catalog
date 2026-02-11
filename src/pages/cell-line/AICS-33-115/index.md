---
templateKey: cell-line
cell_line_id: 33
status: data complete
clone_number: 115
parental_line: 0
genetic_modifications:
  - gene: slc25a17
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0033-115&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0033-115_CofA.pdf
donor_plasmid: https://www.addgene.org/101784/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-19
images_and_videos:
  images:
    - image: single_plane_image_cl115.jpg
      caption: "mEGFP-tagged PMP34 protein localization in an hiPSC colony. Image is a single, central z-slice from a 3D spinning disk confocal z-stack of a live hiPSC colony. "
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/253349954
      caption: "Z-stack of live hiPS cell colony expressing mEGFP-tagged peroxisomal membrane protein PMP34 imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/253349961
      caption: "Timelapse movie of live hiPS cell colony expressing mEGFP tagged peroxisomal membrane protein PMP34. Cells were imaged on a spinning-disk confocal microscope. A single, mid-level plane was acquired every second. Movie sped up 10x real time. Scale bar, 5 µm."
editing_design:
  ncbi_isoforms:
    - N
  cr_rna: GCATCTTCGGAATTTTTCAT
  linker: RDPPVAT
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: SLC25A17 locus showing 3 SLC25A17 isoforms; Bottom: Zoom in on mEGFP insertion site at SLC25A17C-terminal exon"
category_labels: 
 - Key Structure and Organelle
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "Karyotype Analysis"
      images:
        - image: SLC25A17_cl.115.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "SLC25A17-mEGFP"
      junction: "5'"
      expected_size: "1278"
      confirmed_sequence: "Pass"
    - edited_gene: "SLC25A17-mEGFP"
      junction: "3'"
      expected_size: "1726"
      confirmed_sequence: "Pass"
    - edited_gene: "SLC25A17-mEGFP"
      junction: "WT internal"
      expected_size: "960"
      confirmed_sequence: "Pass"
    - edited_gene: "SLC25A17-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:WIP; Untagged:WIP"
      confirmed_sequence: ""
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: SLC25A17-mEGFP
      clone: 115
      fp_ratio: 0.52
      plasmid: 0.0
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 99.8
    - marker: "SOX2"
      positive_cells: 99.7
    - marker: "OCT4"
      positive_cells: 97.9
    - marker: "SSEA-1"
      positive_cells: 2.89
    - marker: "SSEA-3"
      positive_cells: 97.5
    - marker: "TRA-160"
      positive_cells: 98.7
  pluripotency_caption: "iPSCs were stained with directly conjugated antibodies from BD Biosciences, acquired using a FACSAria III Fusion (BD Biosciences), and analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded, then marker-specific gates were set according to corresponding fluorescence-minus-one (FMO) controls."
  trilineage_differentiation:
    - germ_layer: "Ectoderm"
      marker: "PAX6"
      percent_positive_cells: PASS
    - germ_layer: "Endoderm"
      marker: "SOX17"
      percent_positive_cells: PASS
    - germ_layer: "Mesoderm"
      marker: "Brachyury"
      percent_positive_cells: PASS
  trilineage_caption: "iPSCs were subjected to a 5-7 day, non-terminal, directed differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL Technologies, Inc.). Total RNA was isolated from each lineage specific differentiation and assayed via ddPCR for the expression of lineage specific transcripts; Pax6(Ectoderm), Sox17(Endoderm) and Brachyury(Mesoderm)."
  cardiomyocyte_differentiation:
    troponin_percent_positive: "92-94 (3)"
    day_of_beating_percent: "100 (3)"
    day_of_beating_range: "d7-d8"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 20, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Ranges observed across multiple experiments are shown for Troponin T and Day of beating initiation; number of experiments is shown in (). "
---