---
templateKey: cell-line
cell_line_id: 58
status: data complete
clone_number: 67
parental_line: 0
genetic_modifications:
  - gene: ctnnb1
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0058-067&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0058-067_CofA.pdf
donor_plasmid: https://www.addgene.org/109119/
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-25
images_and_videos:
  images:
    - image: single_plane_image_cl67.jpg
      caption: "Single-planes of live hiPS cell colony expressing mEGFP-tagged-beta-catenin. Z-planes shown are at the bottom (left), middle (middle) and top (right) of cells. Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5µm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/265792326
      caption: "Z-stack of live hiPS cell colony expressing mEGFP-tagged beta-catenin. Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/265792317
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged-beta-catenin. Cells were imaged in 3D on a spinning-disk confocal microscope every 5 min. Image is a maximum intensity projection through the top 12 z-sections (3.19 µm) of the colony. Frames were histogram matched to adjust for photobleaching. Movie plays at 3000x real time. Scale bar, 5 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: TGAAAATCCAGCGTGGACAA
  linker: SGLRSRAQASNSAVDGTAAT
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: CTNNB1 locus showing 4 CTNNB1 isoforms; Bottom: Zoom in on mEGFP insertion site at CTNNB1 N-terminal exon"
category_labels: 
 - Key Structure and Organelle
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: AICS-58_AICS-57_full_allele_PCR_180202b.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. (1% Agarose gel with Thermo Fisher 1kb ladder)."
    - title: "Karyotype Analysis"
      images:
        - image: AICS-58_CTNNB1-mEGFP_cl67.jpg
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "CTNNB1-mEGFP"
      junction: "5'"
      expected_size: "1447"
      confirmed_sequence: "Yes"
    - edited_gene: "CTNNB1-mEGFP"
      junction: "3'"
      expected_size: "1626"
      confirmed_sequence: "Yes"
    - edited_gene: "CTNNB1-mEGFP"
      junction: "WT internal"
      expected_size: "762"
      confirmed_sequence: "Yes"
    - edited_gene: "CTNNB1-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:WIP; Untagged:WIP"
      confirmed_sequence: ""
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: CTNNB1-mEGFP
      clone: 67
      fp_ratio: 0.54
      plasmid: 0.0
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 99.8
    - marker: "SOX2"
      positive_cells: 99.9
    - marker: "OCT4"
      positive_cells: 99.5
    - marker: "SSEA-1"
      positive_cells: 1.5
    - marker: "SSEA-3"
      positive_cells: 99.8
    - marker: "TRA-160"
      positive_cells: 99
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
    troponin_percent_positive: "83-72 (2)"
    day_of_beating_percent: "100 (3)"
    day_of_beating_range: "d7-d9"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 20, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Ranges observed across multiple experiments are shown for Troponin T and Day of beating initiation; number of experiments is shown in (). "
---