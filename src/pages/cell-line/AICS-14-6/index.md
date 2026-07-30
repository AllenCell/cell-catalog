---
templateKey: cell-line
cell_line_id: 14
status: data complete
date: 2026-07-30T12:26:00.000Z
clone_number: 6
parental_line: 0
genetic_modifications:
  - gene: fbl
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0014&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0014_CofA.pdf
donor_plasmid: https://www.addgene.org/87427/
images_and_videos:
  images:
    - image: single_plane_image_cl6.jpg
      caption: Single image of a live hiPS cell colony expressing mEGFP tagged
        fibrillarin imaged on a spinning-disk confocal microscope. Image is a
        maximum intensity projection of a 3D z-stack.
    - image: Main_cell_line_morphology.jpg
      caption: Viability and colony formation photographed 3 days post-thaw at 4X
        magnification. Cells were treated with ROCK inhibitor for 24 hrs
        post-thaw.
    - image: Western blot documentation FBL final clone only_final.jpg
    - image: Fibrillarin clone 6 and AICS000 031417.jpg
  videos:
    - video: https://player.vimeo.com/video/208515812
      caption: Z-stack of live hiPS cells expressing mEGFP tagged fibrillarin imaged
        on a spinning-disk confocal microscope. Image starts at the bottom of
        the cells and ends at the top.
    - video: https://player.vimeo.com/video/208515846
      caption: Timelapse movie of live hiPS cells expressing mEGFP tagged fibrillarin.
        Images taken in 3D every 3 minutes for 1.5 hours on a spinning-disk
        confocal microscope. Image is a maximum intensity projection. Movie sped
        up 900x over real time.
    - video: https://player.vimeo.com/video/208515873
      caption: Timelapse movie of a hiPS cell colony expressing mEGFP tagged
        fibrillarin. Images taken in 3D every 3 minutes for 10 hours on a
        spinning-disk confocal microscope. Image is a maximum intensity
        projection. Movie sped up 1800x over real time.
editing_design:
  ncbi_isoforms:
    - NM_001436
  cr_rna: AACTGAAGTTCAGCGCTGTC
  linker: KPNSAVDGTAGPG
  cas9: Wildtype spCas9
  diagrams:
    - title: mEGFP Insert
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: FBL locus; Bottom: Zoom in on mEGFP insertion site at FBL
            C-terminal exon"
genomic_characterization:
  diagrams:
    - title: Schematic of Junctions
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: GFP-tagged and untagged alleles
      images:
        - image: FBL_full_allele_gel.jpg
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
        - image: FBL_cl.6.JPG
          caption: After cells banks were created, one vial was thawed and 30 G-banded
            metaphase cells were karyotyped.
  amplified_junctions:
    - edited_gene: FBL-mEGFP
      junction: 5'
      expected_size: "1560"
      confirmed_sequence: Yes
    - edited_gene: FBL-mEGFP
      junction: 3'
      expected_size: "1754"
      confirmed_sequence: Yes
    - edited_gene: FBL-mEGFP
      junction: WT internal
      expected_size: "671"
      confirmed_sequence: Yes
    - edited_gene: FBL-mEGFP
      junction: Full junctional allele
      expected_size: Tagged:2925; Untagged:2169
      confirmed_sequence: NA
  junction_table_caption: PCR amplified 5', 3', WT, and full allele junctions. 5',
    3', and WT junctions were Sanger sequenced to check for precise mEGFP
    insertion. Primers were designed to exclude amplification from the donor
    plasmid.
  ddpcr:
    - tag: FBL-mEGFP
      clone: 6
      fp_ratio: 0.49
      plasmid: 0
  ddpcr_caption: "mEGFP: mEGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1
    indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone.
    Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with
    no detectable plasmid integration. RPP30 is known 2n reference gene."
  cr_rna_off_targets:
    - clones_analyzed: 2
      off_targets_sequenced_per_clone: 10
      total_sites_sequenced: 20
      mutations_identified: 0
  off_targets_caption: "Potential off-targets were identified using Cas-OFFinder;
    ~4 off-targets in exons and ~4 most likely to cut off-targets (having fewest
    # of flaws relative to on-target) were sanger sequenced to confirm no
    off-target editing"
category_labels:
  - Key Structure and Organelle
  - Nuclear Structure
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-9
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: NANOG
      positive_cells: 99.9
    - marker: SOX2
      positive_cells: 99.9
    - marker: OCT4
      positive_cells: 97.2
    - marker: SSEA-1
      positive_cells: 1.8
    - marker: SSEA-3
      positive_cells: 96.3
    - marker: TRA-160
      positive_cells: 90.9
  pluripotency_caption: iPSCs were stained with directly conjugated antibodies
    from BD Biosciences, acquired using a FACSAria III Fusion (BD Biosciences),
    and analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded,
    then marker-specific gates were set according to corresponding
    fluorescence-minus-one (FMO) controls.
  trilineage_differentiation:
    - germ_layer: Ectoderm
      marker: PAX6
      percent_positive_cells: 97.9
    - germ_layer: Endoderm
      marker: SOX17
      percent_positive_cells: 75.1
    - germ_layer: Mesoderm
      marker: Brachyury
      percent_positive_cells: 96.1
  trilineage_caption: iPSCs were subjected to a 5-7 day, non-terminal, directed
    differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL
    Technologies, Inc.). Cells were stained for markers of Ectoderm, Endoderm,
    and Mesoderm lineages using directly conjugated antibodies from BD
    Biosciences. Gating was based on isotype controls.
  cardiomyocyte_differentiation:
    troponin_percent_positive: 64 (1)
    day_of_beating_percent: 75 (4)
    day_of_beating_range: d7-d9
  cardiomyocyte_differentiation_caption: iPSCs were differentiated to
    cardiomyocytes and observed for initiation of beating starting at day 6. At
    ~day 20, cells were fixed and stained with anti-cardiac Troponin T (BD
    Biosciences) and gating was based on an isotype control. Range observed
    across multiple experiments is shown for Day of beating initiation; number
    of experiments is shown in ().
  rnaseq_analysis:
    - image: StemCellCharacterization_rnaseq_FBL.png
      caption: Transcript levels of stem cell markers and edited locus. Heat maps are
        based on log2 normalized read counts. Cardiomyocyte samples at Day 5 and
        Day 20 are shown for comparison. Unedited Stem Cell samples are from
        passage 14 and passage 8. FBL-mEGFP samples are from two independent
        clones.
---
