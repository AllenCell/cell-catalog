---
templateKey: cell-line
cell_line_id: 86
status: data complete
clone_number: 147
parental_line: 0
genetic_modifications:
  - gene: fbl
    tag_location: C-terminus
    fluorescent_tag: mEGFP
    allele_count: mono
  - gene: npm1
    tag_location: C-terminus
    fluorescent_tag: mTagRFP-T
    allele_count: mono
  - gene: ubtf
    tag_location: N-terminus
    fluorescent_tag: HaloTag
    allele_count: mono
order_link: https://www.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0086-147&PgId=166
certificate_of_analysis: https://www.coriell.org/0/PDF/Allen/ipsc/AICS-0086-147_CofA.pdf
donor_plasmid: https://www.addgene.org/133963/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-42
images_and_videos:
  images:
    - image: single_plane_image_cl147.jpg
      caption: "Single, mid-level plane of cells in a live hiPS cell colony expressing mEGFP-tagged fibrillarin, mTagRFP-T-tagged nucleophosmin, and HaloTag-tagged nucleolar transcription factor UBF visualized with ligand Janelia Fluor 646 (Promega). Panels show individual channels for fibrillarin, nucleolar transcription factor UBF, nucleophosmin, and an overlay of the three (counterclockwise from top right). Cells were imaged in 3D on a spinning-disk confocal microscope. Scale bar, 5μm."
    - image: Main_cell_line_morphology.jpg
      caption: "Viability and colony formation one day (a,b) and four days post-thaw (c,d). Flattened, loosely packed cells around colony edges were observed (Fig. 4c, d; see arrows) in many mature stem cell colonies on day 4 post thaw, which is suboptimal. Small clump passaging with Versene improved the colony morphology after 4 passages (Fig. 4e, f; see arrows)."
  videos:
    - video: https://player.vimeo.com/video/442124590
      caption: "Z-stack of live hiPS cell colony expressing mEGFP-tagged fibrillarin, mTagRFP-T-tagged nucleophosmin, and HaloTag-tagged nucleolar transcription factor UBF visualized with ligand Janelia Fluor 646 (Promega). Panels show individual channels for fibrillarin, nucleolar transcription factor UBF, nucleophosmin, and an overlay of the three (counterclockwise from top right). Cells were imaged in 3D on a spinning-disk confocal microscope. Movie starts at the bottom of the cells and ends at the top. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/442123253
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged fibrillarin, mTagRFP-T-tagged nucleophosmin, and HaloTag-tagged nucleolar transcription factor UBF visualized with ligand Janelia Fluor 646 (Promega). Panels show individual channels for nucleolar transcription factor UBF, fibrillarin, nucleophosmin, and an overlay of the three (left to right). Boxed regions in top row are shown enlarged in the bottom row with increased brightness.  Cells were imaged in 3D on a spinning-disk confocal microscope every 3 min. A single mid-level plane is shown. Movie plays at 900x real time. Scale bar, 5 µm."
    - video: https://player.vimeo.com/video/442124499
      caption: "Time-lapse movie of live hiPS cell colony expressing mEGFP-tagged fibrillarin (pseudocolored in magenta), mTagRFP-T-tagged nucleophosmin (pseudocolored in cyan), and HaloTag-tagged nucleolar transcription factor UBF visualized with ligand Janelia Fluor 646 (Promega) (pseudocolored in yellow); overlay of channels appears white where proteins are colocalized. Cells were imaged in 3D on a spinning-disk confocal microscope every 3 min. A single mid-level plane is shown. Movie plays at 1800x real time. Scale bar, 20 µm."
editing_design:
  ncbi_isoforms:
    - n
  cr_rna: AACTGAAGTTCAGCGCTGTC / TCCAGGCTATTCAAGATCTC / CGAGGAGGTGGCTGGACAGC 
  linker: KPNSAVDGTAGPGSIAT / KPNSAVDGTAGPGSIAT / SG
  cas9: Wildtype spCas9
  diagrams:
    - title: "mEGFP Insert"
      images:
        - image: EditingDesign_gene_figure.png
          caption: "Top: FBL locus with zoom in on mEGFP insertion site at FBL C-terminal exon. Middle: NPM1 locus showing 7 NPM1 isoforms with zoom in on mTagRFP-T insertion site at NPM1 C-terminal exon. Bottom: UBTF locus showing 3 UBTF isoforms with zoom in on HaloTag insertion site at UBTF N-terminal exon"
category_labels: 
  - Key Structure and Organelle
  - Nuclear Structure
genomic_characterization:
  diagrams:
    - title: "Schematic of Junctions"
      images:
        - image: /img/shared/GenomicCharacterization_junction_schematic_generic.png
    - title: "Karyotype Analysis"
      images:
        - image: AICS-86_cl147_FBL_NPM1_UBTF_karyotype.JPG
          caption: "After cells banks were created, one vial was thawed and 30 G-banded metaphase cells were karyotyped."
  amplified_junctions:
    - edited_gene: "FBL-mEGFP"
      junction: "5'"
      expected_size: "1392"
      confirmed_sequence: "yes"
    - edited_gene: "FBL-mEGFP"
      junction: "3'"
      expected_size: "1500"
      confirmed_sequence: "yes"
    - edited_gene: "FBL-mEGFP"
      junction: "WT internal"
      expected_size: "1860"
      confirmed_sequence: "yes"
    - edited_gene: "FBL-mEGFP"
      junction: "Full junctional allele"
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: "yes"
    - edited_gene: "NPM1-mTagRFP-T"
      junction: "5'"
      expected_size: "1500"
      confirmed_sequence: "yes"
    - edited_gene: "NPM1-mTagRFP-T"
      junction: "3'"
      expected_size: "1521"
      confirmed_sequence: "yes"
    - edited_gene: "NPM1-mTagRFP-T"
      junction: "WT internal"
      expected_size: "2325"
      confirmed_sequence: "yes"
    - edited_gene: "NPM1-mTagRFP-T"
      junction: "Full junctional allele"
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: "yes"
    - edited_gene: "UBTF-HaloTag"
      junction: "5'"
      expected_size: "1501"
      confirmed_sequence: "yes"
    - edited_gene: "UBTF-HaloTag"
      junction: "3'"
      expected_size: "1721"
      confirmed_sequence: "yes"
    - edited_gene: "UBTF-HaloTag"
      junction: "WT internal"
      expected_size: "2297"
      confirmed_sequence: "yes"
    - edited_gene: "UBTF-HaloTag"
      junction: "Full junctional allele"
      expected_size: "Tagged: bp; Untagged: bp"
      confirmed_sequence: "yes"
  junction_table_caption: "PCR amplified 5', 3', WT, and full allele junctions. 5', 3', and WT junctions were Sanger sequenced to check for precise mEGFP, mTagRFP-T, and HaloTag insertion. Primers were designed to exclude amplification from the donor plasmid."
  ddpcr:
    - tag: FBL-mEGFP
      clone: 147
      fp_ratio: 0.521
      plasmid: 0.0
    - tag: NPM1-mTagRFP-T
      clone: 147
      fp_ratio: 0.492
      plasmid: 0.0
    - tag: UBTF-HaloTag
      clone: 147
      fp_ratio: 0.482
      plasmid: 0.0
  ddpcr_caption: "FP:RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1 indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone. Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with no detectable plasmid integration. RPP30 is known 2n reference gene."
stem_cell_characteristics:
  pluripotency_analysis:
    - marker: "NANOG"
      positive_cells: 99.7
    - marker: "SOX2"
      positive_cells: 99.8
    - marker: "OCT4"
      positive_cells: 99.3
    - marker: "SSEA-1"
      positive_cells: 0.08
    - marker: "SSEA-4"
      positive_cells: 100
    - marker: "TRA-160"
      positive_cells: 100
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
    troponin_percent_positive: "76-81 (4)"
    day_of_beating_percent: "100 (4)"
    day_of_beating_range: "d10-d12"
  cardiomyocyte_differentiation_caption: "iPSCs were differentiated to cardiomyocytes and observed for initiation of beating starting at day 6. At ~day 12, cells were fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating was based on an isotype control. Ranges observed across multiple experiments are shown for Troponin T and Day of beating initiation; number of experiments is shown in (). "
---