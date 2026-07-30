---
templateKey: cell-line
cell_line_id: 13
status: data complete
date: 2026-07-30T12:25:00.000Z
clone_number: 210
parental_line: 0
genetic_modifications:
  - gene: lmnb1
    tag_location: N-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0013&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0013_CofA.pdf
donor_plasmid: https://www.addgene.org/87422/
images_and_videos:
  images:
    - image: single_plane_image_cl210.jpg
      caption: Single image of a live hiPSC colony expressing LaminB1-mEGFP. Image is
        a maximum intensity projection of a spinning-disk confocal z-stack.
    - image: Main_cell_line_morphology.jpg
      caption: Viability and colony formation photographed 3 days post-thaw at 4X
        magnification. Cells were treated with ROCK inhibitor for 24 hrs
        post-thaw.
    - image: Western_blot.jpg
    - image: LaminB1_clone210_AICS000_122016.jpg
  videos:
    - video: https://player.vimeo.com/video/198393246
      caption: Z-stack of live hiPSC cells expressing LaminB1-mEGFP imaged on a
        spinning-disk confocal microscope. Image starts at the bottom of the
        cells and ends at the top.
    - video: https://player.vimeo.com/video/198393300
      caption: Timelapse movie of live hiPSC cells expressing LaminB1-mEGFP. Images
        taken in 3D every 35 seconds for 23 minutes on a spinning-disk confocal
        microscope. Image is a single slice taken in the middle of the z-stack.
        Movie sped up 350x over real time.
    - video: https://player.vimeo.com/video/198393326
      caption: Timelapse movie of a hiPSC colony expressing LaminB1-mEGFP. Images
        taken in 3D every 3 minutes for 12 hours on a spinning-disk confocal
        microscope. Image is a maximum intensity projection. Movie sped up 1800x
        over real time.
editing_design:
  ncbi_isoforms:
    - NM_005573
  cr_rna: GGGGTCGCAGTCGCCATGGC
  linker: SGLRSRAQAS
  cas9: Wildtype spCas9
  diagrams:
    - title: mEGFP Insert
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: LMNB1 locus showing 2 LMNB1 isoforms; Bottom: Zoom in on mEGFP
            insertion site at LMNB1 N-terminal exon"
genomic_characterization:
  diagrams:
    - title: Schematic of Junctions
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: GFP-tagged and untagged alleles
      images:
        - image: LMNB1_full_allele.jpg
          caption: Junctional PCR primers complementary to sequences flanking the homology
            arms in the distal genome were used together to co-amplify tagged
            and untagged alleles. Gel shows untagged allele (smaller band) and
            tagged allele (larger band) from single PCR reaction. A band
            intermediate in size between the anticipated tagged and untagged
            allele products is consistently observed and is a hypothesized
            heteroduplex of the tagged and untagged allele products. (1% Agarose
            gel with Thermo Fisher 1kb ladder). *clone available from Coriell
    - title: Karyotype Analysis
      images:
        - image: StemCellCharacterization_karyotype.jpg
          caption: After cells banks were created, one vial was thawed and 20 G-banded
            metaphase cells were karyotyped.
  amplified_junctions:
    - edited_gene: LMNB1-mEGFP
      junction: 5'
      expected_size: "1460"
      confirmed_sequence: Yes
    - edited_gene: LMNB1-mEGFP
      junction: 3'
      expected_size: "1689"
      confirmed_sequence: Yes
    - edited_gene: LMNB1-mEGFP
      junction: WT internal
      expected_size: "787"
      confirmed_sequence: Yes
    - edited_gene: LMNB1-mEGFP
      junction: Full junctional allele
      expected_size: Tagged:2845; Untagged:2098
      confirmed_sequence: Yes
  junction_table_caption: PCR amplified and Sanger sequenced 5’, 3’, WT, and full
    allele junctions to check for precise mEGFP insertion. Primers were designed
    to exclude amplification from the donor plasmid.
  ddpcr:
    - tag: LMNB1-mEGFP
      clone: 210
      fp_ratio: 0.45
      plasmid: 0.02
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1
    indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone.
    Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with
    no detectable plasmid integration. RPP30 is known 2n reference gene."
  cr_rna_off_targets:
    - clones_analyzed: 5
      off_targets_sequenced_per_clone: 9
      total_sites_sequenced: 45
      mutations_identified: 0
  off_targets_caption: "Potential off-targets were identified using Cas-OFFinder;
    ~4 off-targets in exons and ~ 4 most likely to cut off-targets (having
    fewest # of flaws relative to on-target) were sanger sequenced to confirm no
    off-target editing."
category_labels:
  - Key Structure and Organelle
  - Nuclear Structure
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-6
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: NANOG
      positive_cells: 99.9
    - marker: SOX2
      positive_cells: 99.9
    - marker: OCT4
      positive_cells: 99.7
    - marker: SSEA-1
      positive_cells: 1.17
    - marker: SSEA-3
      positive_cells: 98.4
    - marker: TRA-160
      positive_cells: 86.1
  pluripotency_caption: iPSCs were stained with directly conjugated antibodies
    from BD Biosciences, acquired using a FACSAria III Fusion (BD Biosciences),
    and analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded,
    then marker-specific gates were set according to corresponding
    fluorescence-minus-one (FMO) controls.
  trilineage_differentiation:
    - germ_layer: Ectoderm
      marker: PAX6
      percent_positive_cells: 72
    - germ_layer: Endoderm
      marker: SOX17
      percent_positive_cells: 81.1
    - germ_layer: Mesoderm
      marker: Brachyury
      percent_positive_cells: 92.7
  trilineage_caption: iPSCs were subjected to a 5-7 day, non-terminal, directed
    differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL
    Technologies, Inc.). Cells were stained for markers of Ectoderm, Endoderm,
    and Mesoderm lineages using directly conjugated antibodies from BD
    Biosciences. Gating was based on isotype controls.
  cardiomyocyte_differentiation:
    troponin_percent_positive: 39-97 (4)
    day_of_beating_percent: 80 (10)
    day_of_beating_range: d7-d12
  cardiomyocyte_differentiation_caption: iPSCs were differentiated to
    cardiomyocytes and observed for initiation of beating starting at day 6. At
    ~day 20, cells were fixed and stained with anti-cardiac Troponin T (BD
    Biosciences) and gating was based on an isotype control. Ranges observed
    across multiple experiments are shown for Troponin T and Day of beating
    initiation; number of experiments is shown in ().
  rnaseq_analysis:
    - image: StemCellCharacterization_rnaseq_LMNB1.png
      caption: Transcript levels of stem cell markers and edited locus. Heat maps are
        based on log2 normalized read counts. Cardiomyocyte samples at Day 5 and
        Day 20 are shown for comparison. Unedited Stem Cell samples are from
        passage 14 and passage 8. LMNB1-mEGFP samples are from two independent
        clones.
---
