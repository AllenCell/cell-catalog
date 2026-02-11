---
templateKey: cell-line
cell_line_id: 22
status: data complete
clone_number: 37
parental_line: 0
genetic_modifications:
  - gene: lamp1
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0022-037&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0022-037_CofA.pdf
donor_plasmid: https://www.addgene.org/101782/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-13
images_and_videos:
  images:
    - image: single_plane_image_cl37.jpg
      caption: "Single image of a live hiPS cell colony expressing mEGFP tagged LAMP-1 imaged on a spinning-disk confocal microscope. Image is a single slice from a 3D z-stack in the top half of the cell. "
    - image: Final_AICS-22_LAMP1_Cl37_4x_D3_II.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/229764111
      caption: "Z-stack of live hiPS cells expressing mEGFP tagged LAMP-1 imaged on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top."
    - video: https://player.vimeo.com/video/229764093
      caption: "Timelapse movie of live hiPS cells expressing mEGFP tagged LAMP-1. Images were taken as a single slice every 1 second for 100 seconds on a spinning-disk confocal microscope. Images have had the ‘despeckle’ ImageJ filter applied. Movie sped up 10x over real time."
editing_design:
  ncbi_isoforms:
    - N
  cr_rna: GTGCACCAGGCTAGATAGTC
  linker: EFGSTGSTGSTGADPPVAT
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: LAMP1 locus; Bottom: Zoom in on mEGFP insertion site at LAMP1 C-terminal exon"
category_labels: 
 - Key Structure and Organelle
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: LAMP1_full_allele_gel.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. WT: parental unedited line; NTC: no template control (1% Agarose gel with Thermo Fisher 1kb ladder)."
    - title: "Karyotype Analysis"
      images:
        - image: LAMP1_cl.37.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "LAMP1-mEGFP"
      junction: "5'"
      expected_size: "1511"
      confirmed_sequence: "Yes"
    - edited_gene: "LAMP1-mEGFP"
      junction: "3'"
      expected_size: "1750"
      confirmed_sequence: "Yes"
    - edited_gene: "LAMP1-mEGFP"
      junction: "WT internal"
      expected_size: "549"
      confirmed_sequence: "Yes"
    - edited_gene: "LAMP1-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:2904; Untagged:2134"
      confirmed_sequence: "Not sequenced"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: LAMP1-mEGFP
      clone: 37
      fp_ratio: 0.54
      plasmid: 0.004
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 99.9
    - marker: "SOX2"
      positive_cells: 99.8
    - marker: "OCT4"
      positive_cells: 92.5
    - marker: "SSEA-1"
      positive_cells: 0.12
    - marker: "SSEA-3"
      positive_cells: 99.7
    - marker: "TRA-160"
      positive_cells: 87.5
  pluripotency_caption: "iPSCs were stained with directly conjugated antibodies from BD Biosciences, acquired using a FACSAria III Fusion (BD Biosciences), and analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded, then marker-specific gates were set according to corresponding fluorescence-minus-one (FMO) controls."
  trilineage_differentiation:
    - germ_layer: "Ectoderm"
      marker: "PAX6"
      percent_positive_cells: 95-97 (2)
    - germ_layer: "Endoderm"
      marker: "SOX17"
      percent_positive_cells: 67-71 (2)
    - germ_layer: "Mesoderm"
      marker: "Brachyury"
      percent_positive_cells: 64-89 (2)
  trilineage_caption: "iPSCs were subjected to a 5-7 day, non-terminal, directed differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL Technologies, Inc.). Cells were stained for markers of Ectoderm, Endoderm, and Mesoderm lineages using directly conjugated antibodies from BD Biosciences. Gating was based on isotype controls. The number of experiments is shown in ()."
  cardiomyocyte_differentiation:
    troponin_percent_positive: "76 (1)"
    day_of_beating_percent: "80 (5)"
    day_of_beating_range: "d7-d10"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 20, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Range observed across multiple experiments is shown for Day of beating initiation; number of experiments is shown in ()."
---