---
templateKey: cell-line
cell_line_id: 23
status: data complete
clone_number: 20
parental_line: 0
genetic_modifications:
  - gene: tjp1
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0023&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0023_CofA.pdf
donor_plasmid: https://www.addgene.org/87429/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-10
images_and_videos:
  images:
    - image: single_plane_image_cl20.jpg
      caption: "Single image of a live hiPS cell colony expressing mEGFP tagged tight junction protein ZO-1 imaged on a spinning-disk confocal microscope. Image is a maximum intensity projection of a 3D z-stack."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/208510859
      caption: "Z-stack of live hiPS cells expressing mEGFP tagged tight junction protein ZO-1 imaged on a spinning-disk confocal microscope. Image starts at the bottom of the cells and ends at the top."
    - video: https://player.vimeo.com/video/208510873
      caption: "Timelapse movie of live hiPS cells expressing mEGFP tagged tight junction protein ZO-1. Images taken in 3D every 3 minutes for 1.5hours on a spinning-disk confocal microscope. Image is a maximum intensity projection. Movie sped up 910x over real time."
    - video: https://player.vimeo.com/video/208510881
      caption: "Timelapse movie of a hiPS cell colony expressing mEGFP tagged tight junction protein ZO-1. Images taken in 3D every 3 minutes for 15 hours on a spinning-disk confocal microscope. Image is a maximum intensity projection. Movie sped up 1800x over real time."
editing_design:
  ncbi_isoforms:
    - NM_003257.4
  cr_rna: GGCCGCGGAGGCGCTCACCT
  linker: SGLRSRALERDK
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: TJP1 locus showing 4 TJP1  isoforms; Bottom: Zoom in on mEGFP insertion site at TJP1 N-terminal exon"
category_labels: 
 - Key Structure and Organelle
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: TJP1_full_allele_gel.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. (1% Agarose gel with Thermo Fisher 1kb ladder). *clone available from Coriell"
    - title: "Karyotype Analysis"
      images:
        - image: TJP1_cl.20.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "TJP1-mEGFP"
      junction: "5'"
      expected_size: "1445"
      confirmed_sequence: "Yes"
    - edited_gene: "TJP1-mEGFP"
      junction: "3'"
      expected_size: "1876"
      confirmed_sequence: "Yes"
    - edited_gene: "TJP1-mEGFP"
      junction: "WT internal"
      expected_size: "453"
      confirmed_sequence: "Yes"
    - edited_gene: "TJP1-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:3006; Untagged:2256"
      confirmed_sequence: "NA"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: TJP1-mEGFP
      clone: 20
      fp_ratio: 0.1
      plasmid: 0.0
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
  cr_rna_off_targets:
    - clones_analyzed: 3
      off_targets_sequenced_per_clone: 7
      total_sites_sequenced: 21
      mutations_identified: 0
  off_targets_caption: "Potential off-targets were identified using Cas-OFFinder; ~4 off-targets in exons and ~4 most likely to cut off-targets (having fewest # of flaws relative to on-target) were sanger sequenced to confirm no off-target editing"
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 99.4
    - marker: "SOX2"
      positive_cells: 99.9
    - marker: "OCT4"
      positive_cells: 99.7
    - marker: "SSEA-1"
      positive_cells: 3.48
    - marker: "SSEA-3"
      positive_cells: 99.9
    - marker: "TRA-160"
      positive_cells: 94
  pluripotency_caption: "iPSCs were stained with directly conjugated antibodies from BD Biosciences, acquired using a FACSAria III Fusion (BD Biosciences), and analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded, then marker-specific gates were set according to corresponding fluorescence-minus-one (FMO) controls."
  trilineage_differentiation:
    - germ_layer: "Ectoderm"
      marker: "PAX6"
      percent_positive_cells: 98.7
    - germ_layer: "Endoderm"
      marker: "SOX17"
      percent_positive_cells: 53.5
    - germ_layer: "Mesoderm"
      marker: "Brachyury"
      percent_positive_cells: 98.5
  trilineage_caption: "iPSCs were subjected to a 5-7 day, non-terminal, directed differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL Technologies, Inc.). Cells were stained for markers of Ectoderm, Endoderm, and Mesoderm lineages using directly conjugated antibodies from BD Biosciences. Gating was based on isotype controls."
  cardiomyocyte_differentiation:
    troponin_percent_positive: "75-93 (3)"
    day_of_beating_percent: "100 (6)"
    day_of_beating_range: "d7-d17"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 20, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Ranges observed across multiple experiments are shown for Troponin T and Day of beating initiation; number of experiments is shown in ()."
---