---
templateKey: cell-line
cell_line_id: 74
status: data complete
clone_number: 26
parental_line: 0
genetic_modifications:
  - gene: sox2
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0074-026&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0074-026_CofA.pdf
donor_plasmid: https://www.addgene.org/124606/
hpscreg_certificate_link: https://hpscreg.eu/cell-line/UCSFi001-A-37
images_and_videos:
  images:
    - image: single_plane_image_cl26.jpg
      caption: "Single mid-level plane of live hiPS cell colony expressing mEGFP-tagged nucleophosmin. Right panel is the same image as the left but with contrast enhanced to visualize dimmer localization in mitotic cells. Images are maximum intensity projections through the volume of the cells. Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5µm. "
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation photographed 3 days post-thaw at 4X magnification. Cells were treated with ROCK inhibitor for 24 hrs post-thaw."
  videos:
    - video: https://player.vimeo.com/video/333850495
      caption: "Z-stack of live hiPS cell colony expressing mEGFP-tagged transcription factor SOX-2 protein. Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/333850589
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged transcription factor SOX-2 protein. Cells were imaged in 3D on a spinning-disk confocal microscope every 3 min. A single mid-level plane is shown. Movie plays at 900x real time. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/333850572
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged transcription factor SOX-2 protein. Cells were imaged in 3D on a spinning-disk confocal microscope every 5 min. A single mid-level plane is shown. Movie plays at 3000x real time. Scale bar, 20 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: TGCCCCTCTCACACATGTGA
  linker: GGSG
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: SOX2 locus; Bottom: Zoom in on mEGFP insertion site at SOX2 C-terminus"
category_labels: 
 - Nuclear Structure
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_mEGFP.png
    - title: "GFP-tagged and untagged alleles"
      images:
        - image: Website_fullAllele_AICS-74.jpg
          caption: "Junctional PCR primers complementary to sequences flanking the homology arms in the distal genome were used together to amplify tagged and untagged allele. Gel shows untagged allele (smaller band) for WT unedited line and tagged allele (larger band) for cl26. (1% Agarose gel with Thermo Fisher 1kb ladder)."
    - title: "Karyotype Analysis"
      images:
        - image: SOX2_cl26_final_karyo.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "SOX2-mEGFP"
      junction: "5'"
      expected_size: "1599"
      confirmed_sequence: "Yes"
    - edited_gene: "SOX2-mEGFP"
      junction: "3'"
      expected_size: "1663"
      confirmed_sequence: "Yes"
    - edited_gene: "SOX2-mEGFP"
      junction: "WT internal"
      expected_size: "377"
      confirmed_sequence: "Yes"
    - edited_gene: "SOX2-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged: 3033; Untagged: 2298"
      confirmed_sequence: "Yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: SOX2-mEFGP
      clone: 26
      fp_ratio: 0.524
      plasmid: 0.0
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 99.8
    - marker: "SOX2"
      positive_cells: 99.9
    - marker: "OCT4"
      positive_cells: 99.6
    - marker: "SSEA-1"
      positive_cells: 0.75
    - marker: "SSEA-4"
      positive_cells: 100
    - marker: "TRA-160"
      positive_cells: 97.9
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
    troponin_percent_positive: "81.8 (1)"
    day_of_beating_percent: "75 (8)"
    day_of_beating_range: "d11"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 12, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Ranges observed across multiple experiments are shown for Troponin T and Day of beating initiation; number of experiments is shown in (). "
---