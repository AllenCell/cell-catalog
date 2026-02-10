---
templateKey: cell-line
cell_line_id: 10
status: data complete
clone_number: 55
parental_line: 0
genetic_modifications:
  - gene: sec61b
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0010&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0010_CofA.pdf
donor_plasmid: https://www.addgene.org/87426/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-8
images_and_videos:
  images:
    - image: single_plane_image_cl55.jpg
      caption: "hiPS cell colony expressing mEGFP tagged Sec61-beta imaged on a spinning-disk confocal microscope. Left panel is a single slice near the bottom of the cell; right panel is a single slice near the middle of the cell."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/208529069
      caption: "Z-stack of live hiPS cells expressing mEGFP tagged Sec61-beta imaged on a spinning-disk confocal microscope. Image starts at the bottom of the cells and ends at the top."
    - video: https://player.vimeo.com/video/208529088
      caption: "Timelapse movie of live hiPS cells expressing mEGFP tagged Sec61-beta. Images taken in 3D every 2 minutes for 3 hours on a spinning-disk confocal microscope. Image is a single slice through the center of the cells. Movie sped up 600x over real time."
editing_design:
  ncbi_isoforms:
    - NM_006808
  cr_rna: GCCATACCATATTGGAGATG
  linker: SGLRS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: SEC61B locus; Bottom: Zoom in on mEGFP insertion site at SEC61B N-terminal exon"
category_labels: 
 - Key Structure and Organelle
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: SEC61B_full_allele_gel.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. (1% Agarose gel with Thermo Fisher 1kb ladder). *clone available from Coriell"
    - title: "Karyotype Analysis"
      images:
        - image: SEC61B_cl.55.JPG
          caption: "After cells banks were created, one vial was thawed and 20 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "SEC61B-mEGFP"
      junction: "5'"
      expected_size: "1500"
      confirmed_sequence: "Yes"
    - edited_gene: "SEC61B-mEGFP"
      junction: "3'"
      expected_size: "1803"
      confirmed_sequence: "Yes"
    - edited_gene: "SEC61B-mEGFP"
      junction: "WT internal"
      expected_size: "810"
      confirmed_sequence: "Yes"
    - edited_gene: "SEC61B-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:3019; Untagged:2287"
      confirmed_sequence: "NA"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: SEC61B-mEGFP
      clone: 55
      fp_ratio: 0.47
      plasmid: 0.0
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
  cr_rna_off_targets:
    - clones_analyzed: 2
      off_targets_sequenced_per_clone: 12
      total_sites_sequenced: 24
      mutations_identified: 0
  off_targets_caption: "Potential off-targets were identified using Cas-OFFinder; ~4 off-targets in exons and ~4 most likely to cut off-targets (having fewest # of flaws relative to on-target) were sanger sequenced to confirm no off-target editing"
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 99.9
    - marker: "SOX2"
      positive_cells: 99.9
    - marker: "OCT4"
      positive_cells: 97.4
    - marker: "SSEA-1"
      positive_cells: 0.45
    - marker: "SSEA-3"
      positive_cells: 95.2
    - marker: "TRA-160"
      positive_cells: 97.2
  pluripotency_caption: "iPSCs were stained with directly conjugated antibodies from BD Biosciences, acquired using a FACSAria III Fusion (BD Biosciences), and analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded, then marker-specific gates were set according to corresponding fluorescence-minus-one (FMO) controls."
  trilineage_differentiation:
    - germ_layer: "Ectoderm"
      marker: "PAX6"
      percent_positive_cells: 98.5
    - germ_layer: "Endoderm"
      marker: "SOX17"
      percent_positive_cells: 76.1
    - germ_layer: "Mesoderm"
      marker: "Brachyury"
      percent_positive_cells: 97
  trilineage_caption: "iPSCs were subjected to a 5-7 day, non-terminal, directed differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL Technologies, Inc.). Cells were stained for markers of Ectoderm, Endoderm, and Mesoderm lineages using directly conjugated antibodies from BD Biosciences. Gating was based on isotype controls."
  cardiomyocyte_differentiation:
    troponin_percent_positive: "95 (1)"
    day_of_beating_percent: "80 (5)"
    day_of_beating_range: "d7-d8"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 20, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Range observed across multiple experiments is shown for Day of beating initiation; number of experiments is shown in ()."
  rnaseq_analysis:
    - image: StemCellCharacterization_rnaseq_SEC61B.png
      caption: "Transcript levels of stem cell markers and edited locus. Heat maps are based on log2 normalized read counts. Cardiomyocyte samples at Day 5 and Day 20 are shown for comparison. Unedited Stem Cell samples are from passage 14 and passage 8. SEC61B-mEGFP samples are from two independent clones."
---