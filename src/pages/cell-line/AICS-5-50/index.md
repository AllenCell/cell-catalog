---
templateKey: cell-line
cell_line_id: 5
status: data complete
clone_number: 50
parental_line: 0
genetic_modifications:
  - gene: pxn
    tag_location: C-terminus
    fluorescent_tag: EGFP
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0005&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0005_CofA.pdf
donor_plasmid: https://www.addgene.org/87420/
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-1
images_and_videos:
  images:
    - image: single_plane_image_cl50.jpg
      caption: "Single image of a live hiPSC colony expressing paxillin-EGFP imaged on a spinning-disk confocal microscope. Left panel is a single slice of the z-tack near the bottom of the cell; right panel is this same projection overlaid onto one slice of the same z-stack in the transmitted light channel."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/198387263
      caption: "Timelapse movie of a hiPSC colony expressing paxillin-EGFP. Images are a single slice near the bottom of the cell taken every 5 minutes for 400 minutes on a spinning-disk confocal microscope. Movie sped up 3000x over real time."
    - video: https://player.vimeo.com/video/198389731
      caption: "Timelapse movie of a hiPSC colony expressing paxillin-EGFP. Images taken as a partial z-stack near the bottom of the cell every 5 minutes for 160 minutes on a spinning-disk confocal microscope. Image is a maximum intensity projection. Movie sped up 1500x over real time."
editing_design:
  ncbi_isoforms:
    - NM_0028593
  cr_rna: GCACCTAGCAGAAGAGCTTG
  linker: GTSGGS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: PXN locus showing 4 PXN isoforms; Bottom: Zoom in on EGFP insertion site at PXN C-terminal exon"
category_labels: 
 - Key Structure and Organelle
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_EGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: PXN_full_allele.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller band) and tagged allele (larger band) from single PCR reaction. A band intermediate in size between the anticipated tagged and untagged allele products is consistently observed and is a hypothesized heteroduplex of the tagged and untagged allele products. (1% Agarose gel with Thermo Fisher 1kb ladder). *clone available from Coriell"
    - title: "Karyotype Analysis"
      images:
        - image: StemCellCharacterization_karyotype.jpg
          caption: "After cells banks were created, one vial was thawed and 20 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "PXN-EGFP"
      junction: "5'"
      expected_size: "1186"
      confirmed_sequence: "Yes"
    - edited_gene: "PXN-EGFP"
      junction: "3'"
      expected_size: "1150"
      confirmed_sequence: "Yes"
    - edited_gene: "PXN-EGFP"
      junction: "WT internal"
      expected_size: "800"
      confirmed_sequence: "Yes"
    - edited_gene: "PXN-EGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged:2770; Untagged:2055"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified and Sanger sequenced 5’, 3’, WT, and full allele junctions to check for precise EGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: PXN-EGFP
      clone: 50
      fp_ratio: 0.56
      plasmid: 0.0
  ddpcr_caption: "EGFP: EGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
  cr_rna_off_targets:
    - clones_analyzed: 5
      off_targets_sequenced_per_clone: 11
      total_sites_sequenced: 55
      mutations_identified: 0
  off_targets_caption: "Potential off-targets were identified using Cas-OFFinder; ~4 off-targets in exons and ~ 4 most likely to cut off-targets (having fewest # of flaws relative to on-target) were sanger sequenced to confirm no off-target editing."
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 98.7
    - marker: "SOX2"
      positive_cells: 97.4
    - marker: "OCT4"
      positive_cells: 97.3
    - marker: "SSEA-1"
      positive_cells: 3.49
    - marker: "SSEA-3"
      positive_cells: 100
    - marker: "TRA-160"
      positive_cells: 90
  pluripotency_caption: "iPSCs were stained with directly conjugated antibodies from BD Biosciences, acquired using a FACSAria III Fusion (BD Biosciences), and analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded, then marker-specific gates were set according to corresponding fluorescence-minus-one (FMO) controls."
  trilineage_differentiation:
    - germ_layer: "Ectoderm"
      marker: "PAX6"
      percent_positive_cells: 65.4
    - germ_layer: "Endoderm"
      marker: "SOX17"
      percent_positive_cells: 57.8
    - germ_layer: "Mesoderm"
      marker: "Brachyury"
      percent_positive_cells: 95.8
  trilineage_caption: "iPSCs were subjected to a 5-7 day, non-terminal, directed differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL Technologies, Inc.). Cells were stained for markers of Ectoderm, Endoderm, and Mesoderm lineages using directly conjugated antibodies from BD Biosciences. Gating was based on isotype controls."
  cardiomyocyte_differentiation:
    troponin_percent_positive: "66-98 (4)"
    day_of_beating_percent: "75 (16)"
    day_of_beating_range: "d7-d17"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 20, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Ranges observed across multiple experiments are shown for Troponin T and Day of beating initiation; number of experiments is shown in ()."
  rnaseq_analysis:
    - image: StemCellCharacterization_rnaseq_fig.png
      caption: "Transcript levels of stem cell markers and edited locus. Heat maps are based on log2 normalized read counts. Cardiomyocyte samples at Day 5 and Day 20 are shown for comparison. Unedited Stem Cell samples are from passage 14 and passage 8. PXN-EGFP samples are from two independent clones."
---