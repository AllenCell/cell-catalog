---
templateKey: cell-line
cell_line_id: 75
status: data complete
date: 2026-07-30T22:16:00.000Z
clone_number: 85
parental_line: 0
genetic_modifications:
  - gene: actn2
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0075-085&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0075-085_CofA.pdf
donor_plasmid: https://www.addgene.org/124607/
images_and_videos:
  images:
    - image: single_plane_image_cl85.jpg
      caption: Single, mid-level plane of live hiPSC-derived cardiomyocytes expressing
        mEGFP-tagged alpha-actinin-2 protein. Inset shows 2.5x enlargement of
        boxed region to show myofilament detail. Twelve days after the onset of
        differentiation, cells were plated on PEI and laminin coated glass and
        imaged in 3D on a spinning-disk confocal microscope 7 days later (19
        days total after the onset of differentiation). Scale bar, 20μm
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation post-thaw. a-d: Crater-like morphology
        is rare post-thaw (∼1% of population). e-f: Morphology worsens the first
        few passages post-thaw when seeding at 1.2M/10cm dish for three days and
        650K cells/10cm dish for four days. e: Craters can be seen in >10% of
        colonies, and optimal confluence is not reached in three days of growth.
        f: Lower density seeding for four days of growth improves morphology
        (fewer craters, better packing) and confluence. Colony morphology and
        craters resolve with continued passaging and become comparable to those
        observed post-thaw as shown in c and d. Scale bars are as shown."
    - image: ACTN2_clone85_and_AICS0000.jpg
  videos:
    - video: https://player.vimeo.com/video/333844919
      caption: Z-stack of live hiPSC-derived cardiomyocytes expressing mEGFP-tagged
        alpha-actinin-2 protein. Twelve days after the onset of differentiation,
        cells were plated on PEI and laminin coated glass and imaged in 3D on a
        spinning disk confocal microscope 28 days later (40 days total after the
        onset of differentiation). Cells were treated with 20 mM of the myosin
        inhibitor 2,3-Butanedione monoxime (BDM) to prevent beating during image
        acquisition. Movie starts at the bottom of the cells and ends at the
        top. Inset is a 2.5x enlargement of boxed region to show detail of
        alpha-actinin-2 in myofibrils. Scale bar, 20 µm.
    - video: https://player.vimeo.com/video/333844902
      caption: Time-lapse movie of live beating hiPSC-derived cardiomyocytes
        expressing mEGFP-tagged alpha-actinin-2 protein. Twelve days after the
        onset of differentiation, cells were plated on PEI and laminin coated
        glass and imaged on a spinning disk confocal microscope 18 days later
        (30 days total after the onset of differentiation). A single plane of
        cells was imaged continuously with a 100 ms exposure time. Inset is a
        2.5x enlargement of boxed region to show detail of alpha-actinin-2 in
        myofibrils. Scale bar, 20 µm. Movie plays in real time.
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: CGTTCTCTTCCGCACTCTAC
  linker: VDGTAGPGSIAT
  cas9: Wildtype spCas9
  diagrams:
    - title: mEGFP Insert
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: ACTN2 locus showing 3 ACTN2 isoforms; Bottom: Zoom in on mEGFP
            insertion site at ACTN2 C-terminus; More information on tagging
            transcriptionally silent genes in hiPSCs is available in Roberts et
            al. (2019) Stem Cell Reports"
genomic_characterization:
  diagrams:
    - title: Schematic of Junctions
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: Karyotype Analysis
      images:
        - image: ACTN2_cl85_final_karyo.JPG
          caption: After cells banks were created, one vial was thawed and 30 G-banded
            metaphase cells were karyotyped.
  amplified_junctions:
    - edited_gene: ACTN2-mEGFP
      junction: 5'
      expected_size: fill
      confirmed_sequence: fill
    - edited_gene: ACTN2-mEGFP
      junction: 3'
      expected_size: fill
      confirmed_sequence: fill
    - edited_gene: ACTN2-mEGFP
      junction: WT internal
      expected_size: fill
      confirmed_sequence: fill
    - edited_gene: ACTN2-mEGFP
      junction: Full junctional allele
      expected_size: "Wild Type: ; Insert: "
      confirmed_sequence: fill
  junction_table_caption: PCR amplified 5', 3', WT, and full allele junctions. 5',
    3', and WT junctions were Sanger sequenced to check for precise mEGFP
    insertion. Primers were designed to exclude amplification from the donor
    plasmid.
  ddpcr:
    - tag: ACTN2-mEGFP
      clone: 85
      fp_ratio: 0.48
      plasmid: 0
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate
    heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid:
    AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no
    detectable plasmid integration. RPP30 is known 2n reference gene."
category_labels:
  - Cardiac Structure
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-4
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: NANOG
      positive_cells: 99.9
    - marker: SOX2
      positive_cells: 99.9
    - marker: OCT4
      positive_cells: 99.8
    - marker: SSEA-1
      positive_cells: 0.22
    - marker: SSEA-4
      positive_cells: 100
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
      percent_positive_cells: Pass
    - germ_layer: Endoderm
      marker: SOX17
      percent_positive_cells: Pass
    - germ_layer: Mesoderm
      marker: Brachyury
      percent_positive_cells: Pass
  trilineage_caption: iPSCs were subjected to a 5-7 day, non-terminal, directed
    differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL
    Technologies, Inc.). Total RNA was isolated from each lineage specific
    differentiation and assayed via ddPCR for the expression of lineage specific
    transcripts; Pax6(Ectoderm), Sox17(Endoderm) and Brachyury(Mesoderm).
  cardiomyocyte_differentiation:
    troponin_percent_positive: 70.5-75.3 (4)
    day_of_beating_percent: 100 (4)
    day_of_beating_range: d9-d11
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to
    cardiomyocytes and observed for initiation of beating starting at day 6. At
    ~day 12, cells were fixed and stained with anti-cardiac Troponin T (BD
    Biosciences) and gating was based on an isotype control. Ranges observed
    across multiple experiments are shown for Troponin T and Day of beating
    initiation; number of experiments is shown in (). "
---
