---
templateKey: cell-line
cell_line_id: 68
status: data complete
clone_number: 9
parental_line: 0
genetic_modifications:
  - gene: smc1a
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0068-009&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0068-009_CofA.pdf
donor_plasmid: https://www.addgene.org/114406/
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-34
images_and_videos:
  images:
    - image: single_plane_image_cl9.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged SMC protein 1A. Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5 µm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 4 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/307602775
      caption: "Z-stack of a live hiPS cell colony expressing mEGFP-tagged SMC protein 1A. Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5µm."
    - video: https://player.vimeo.com/video/307601514
      caption: "Time-lapse movie of a live hiPS cell colony expressing mEGFP-tagged SMC protein 1A. Cells were imaged in 3D on a spinning-disk confocal microscope every 3 min. A single mid-level plane is shown. Frames were histogram matched to adjust for photobleaching. Movie plays at 900x real time. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/307601810
      caption: "Time-lapse movie of a live hiPS cell colony expressing mEGFP-tagged SMC protein 1A. Cells were imaged in 3D on a spinning-disk confocal microscope every 5 min. A single mid-level plane is shown. Movie plays at 3000x real time. Scale bar, 20 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: AAAATACTGCTACTGCTCAT
  linker: LSSSGPSGS
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: SMC1A locus showing 2 SMC1A isoforms; Bottom: Zoom in on mEGFP insertion site at SMC1A C-terminal exon"
category_labels: 
 - Nuclear Structure
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: FULL_ALLELE_CL9.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to amplify tagged and untagged allele. Gel shows untagged allele (smaller band) for WT unedited line and tagged allele (larger band) for cl9. (1% Agarose gel with Thermo Fisher 1kb ladder)."
    - title: "Karyotype Analysis"
      images:
        - image: Cl9_Karyo.PNG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "SMC1A-mEGFP"
      junction: "5'"
      expected_size: "1601"
      confirmed_sequence: "PASS"
    - edited_gene: "SMC1A-mEGFP"
      junction: "3'"
      expected_size: "1597"
      confirmed_sequence: "PASS"
    - edited_gene: "SMC1A-mEGFP"
      junction: "WT internal"
      expected_size: "N/A"
      confirmed_sequence: "N/A"
    - edited_gene: "SMC1A-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Wild Type:X-Chromosome; Insert: 3076"
      confirmed_sequence: "PASS"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: SMC1A-mEGFP
      clone: 9
      fp_ratio: 0.51
      plasmid: 0.0
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 99.9
    - marker: "SOX2"
      positive_cells: 100
    - marker: "OCT4"
      positive_cells: 99.7
    - marker: "SSEA-1"
      positive_cells: 0.19
    - marker: "SSEA-3"
      positive_cells: 99.8
    - marker: "TRA-160"
      positive_cells: 97.8
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
    troponin_percent_positive: "79.5 (1)"
    day_of_beating_percent: "100 (3)"
    day_of_beating_range: "d10"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 12, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Ranges observed across multiple experiments are shown for Troponin T and Day of beating initiation; number of experiments is shown in (). "
---