---
templateKey: cell-line
cell_line_id: 32
status: data complete
date: 2026-07-30T14:45:00.000Z
clone_number: 19
parental_line: 0
genetic_modifications:
  - gene: cetn2
    tag_location: N-terminus
    fluorescent_tag: mTagRFP-T
    allele_count: mono
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0032-019&Product=iPSC
certificate_of_analysis: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0032-019_CofA.pdf
donor_plasmid: https://www.addgene.org/101781/
images_and_videos:
  images:
    - image: single_plane_image_cl19.jpg
      caption: "Single image of a live hiPS cell colony expressing mTagRFP-T tagged
        centrin-2 imaged on a spinning-disk confocal microscope. Left image is a
        maximum intensity projection of a 3D z-stack. Right image shows centrin
        (red) overlaid with DNA (Hoechst, blue). "
    - image: Final_170421_AICS-32_cl19_d3_4X-1.jpg
      caption: Viability and colony formation photographed 3 days post-thaw at 4X
        magnification. Cells were treated with ROCK inhibitor for 24 hrs
        post-thaw.
    - image: Centrin clone 19 and AICS000 new.jpg
  videos:
    - video: https://player.vimeo.com/video/229763183
      caption: Z-stack of live hiPS cells expressing mTagRFP-T tagged centrin-2 imaged
        on a spinning-disk confocal microscope. Movie starts at the bottom of
        the cells and ends at the top.
    - video: https://player.vimeo.com/video/229763165
      caption: Timelapse movie of a live hiPS cell colony expressing mTagRFP-T tagged
        centrin-2. Images were taken in 3D every 3 minutes for 6 hours on a
        spinning-disk confocal microscope. Images are maximum intensity
        projections with the ‘despeckle’ ImageJ filter applied. Movie sped up
        1800x over real time.
editing_design:
  ncbi_isoforms:
    - N
  cr_rna: GTTTGCCTTTTTGAAATTGG
  linker: SGLRS
  cas9: Wildtype spCas9
  diagrams:
    - title: mEGFP Insert
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: CETN2 locus; Bottom: Zoom in on mTagRFP-T insertion site at CETN2
            N-terminus"
genomic_characterization:
  diagrams:
    - title: Schematic of Junctions
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mTag-RFP-T.png
    - title: GFP-tagged and untagged alleles
      images:
        - image: CETN2_full_allele_gel.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the
            homology arms in the distal genome were used together to amplify
            tagged allele. Single band corresponding to tagged allele is
            observed for clone 19. Smaller single band corresponding to the
            untagged allele is observed in the parental unedited line (WT). NTC:
            no template control. (1% Agarose gel with Thermo Fisher 1kb
            ladder)."
    - title: Karyotype Analysis
      images:
        - image: CETN2_cl.19.JPG
          caption: After cells banks were created, one vial was thawed and 30 G-banded
            metaphase cells were karyotyped.
  amplified_junctions:
    - edited_gene: CETN2-mTagRFP-T
      junction: 5'
      expected_size: "1940"
      confirmed_sequence: Yes
    - edited_gene: CETN2-mTagRFP-T
      junction: 3'
      expected_size: "2083"
      confirmed_sequence: Yes
    - edited_gene: CETN2-mTagRFP-T
      junction: WT internal
      expected_size: NA
      confirmed_sequence: NA
    - edited_gene: CETN2-mTagRFP-T
      junction: Full junctional allele
      expected_size: Tagged:3932; Untagged:NA
      confirmed_sequence: Not sequenced
  junction_table_caption: PCR amplified 5', 3', WT, and full allele junctions.
    Expect absence of WT (untagged) allele because CETN2 is on chrX, and WTC is
    XY. 5' and 3’ junctions were Sanger sequenced to check for precise mTagRFP-T
    insertion. Primers were designed to exclude amplification from the donor
    plasmid.
  ddpcr:
    - tag: CETN2-mTagRFP-T
      clone: 19
      fp_ratio: 0.55
      plasmid: 0.002
  ddpcr_caption: "mTagRFP-T: mTagRFP-T/RPP30 ratio from ddPCR assay; values = 0.5
    +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous
    clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate
    clone with no detectable plasmid integration. RPP30 is known 2n reference
    gene."
  cr_rna_off_targets:
    - clones_analyzed: 5
      off_targets_sequenced_per_clone: 8
      total_sites_sequenced: 40
      mutations_identified: 0
  off_targets_caption: "Potential off-targets were identified using Cas-OFFinder;
    ~4 off-targets in exons and ~4 most likely to cut off-targets (having fewest
    # of flaws relative to on-target) were sanger sequenced to confirm no
    off-target editing"
category_labels:
  - Key Structure and Organelle
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-17
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: NANOG
      positive_cells: 99.2
    - marker: SOX2
      positive_cells: 99
    - marker: OCT4
      positive_cells: 99
    - marker: SSEA-1
      positive_cells: 0.39
    - marker: SSEA-3
      positive_cells: 99.2
    - marker: TRA-160
      positive_cells: 98.7
  pluripotency_caption: iPSCs were stained with directly conjugated antibodies
    from BD Biosciences, acquired using a FACSAria III Fusion (BD Biosciences),
    and analyzed using FlowJo software (Treestar, Inc.). Doublets were excluded,
    then marker-specific gates were set according to corresponding
    fluorescence-minus-one (FMO) controls.
  trilineage_differentiation:
    - germ_layer: Ectoderm
      marker: PAX6
      percent_positive_cells: 92-96 (2)
    - germ_layer: Endoderm
      marker: SOX17
      percent_positive_cells: 65-89 (2)
    - germ_layer: Mesoderm
      marker: Brachyury
      percent_positive_cells: 66-87 (2)
  trilineage_caption: iPSCs were subjected to a 5-7 day, non-terminal, directed
    differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL
    Technologies, Inc.). Cells were stained for markers of Ectoderm, Endoderm,
    and Mesoderm lineages using directly conjugated antibodies from BD
    Biosciences. Gating was based on isotype controls. The number of experiments
    is shown in ().
  cardiomyocyte_differentiation:
    troponin_percent_positive: 95 (2)
    day_of_beating_percent: 100 (3)
    day_of_beating_range: d8-d11
  cardiomyocyte_differentiation_caption: iPSCs were differentiated to
    cardiomyocytes and observed for initiation of beating starting at day 6. At
    ~day 20, cells were fixed and stained with anti-cardiac Troponin T (BD
    Biosciences) and gating was based on an isotype control. Range observed
    across multiple experiments is shown for Day of beating initiation; number
    of experiments is shown in ().
---
