import CMS from "decap-cms-app";
import cloudinary from "decap-cms-media-library-cloudinary";
import uploadcare from "decap-cms-media-library-uploadcare";
import React from "react";

import CellLinePreview from "./preview-templates/CellLinePreview";
import DiseaseCatalogPreview from "./preview-templates/DiseaseCatalogPreview";
import DiseaseCellLinePreview from "./preview-templates/DiseaseCellLinePreview";
import GeneNamePreview from "./preview-templates/GeneNamePreview";
import {
    CloudinaryImagePreview,
    CloudinaryImageWidget,
} from "./widgets/CloudinaryImageWidget";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

// Decap CMS's registerWidget type doesn't include `entry` in control props,
// but it passes it at runtime (Immutable.js Map). Cast required here.
CMS.registerWidget(
    "cloudinary-image",
    CloudinaryImageWidget as unknown as React.FC,
    CloudinaryImagePreview,
);
CMS.registerPreviewStyle(
    "https://cdnjs.cloudflare.com/ajax/libs/antd/4.4.3/antd.min.css",
);
CMS.registerPreviewStyle("./style.css");

CMS.registerPreviewTemplate("about", DiseaseCatalogPreview);
CMS.registerPreviewTemplate("cell-line", CellLinePreview);
CMS.registerPreviewTemplate("gene-name", GeneNamePreview);
CMS.registerPreviewTemplate("disease-cell-line", DiseaseCellLinePreview);
