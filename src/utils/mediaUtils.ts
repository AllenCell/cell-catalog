import { getImage } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

import {
    ImageOrVideo,
    ImageSource,
    MediaFrontmatter,
    RawImageData,
    RawVideoData,
    UnpackedImageData,
} from "../component-queries/types";

export function isExternalUrl(image: ImageSource): image is string {
    return typeof image === "string";
}

// type guard to distinguish images and videos at runtime
export function isImage(item: ImageOrVideo): item is UnpackedImageData {
    return "image" in item;
}

export const getImageSrcFromFileNode = (file: FileNode): string | undefined => {
    return file.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
};

// flatten and validate image data
export function unpackImageData(x: RawImageData): UnpackedImageData | null {
    if (!x) return null;
    // Gatsby image: image.childImageSharp.gatsbyImageData
    if (x.image?.childImageSharp?.gatsbyImageData) {
        return {
            image: x.image.childImageSharp.gatsbyImageData,
            caption: x.caption,
        };
    }
    // Cloudinary url: image is null (file can't resolve), use image_url
    if (x.image_url) {
        return { image: x.image_url, caption: x.caption };
    }
    return null;
}

export const hasMedia = (rawMedia?: MediaFrontmatter): boolean => {
    return Boolean(rawMedia?.images?.length || rawMedia?.videos?.length);
};

export const getImages = (raw?: MediaFrontmatter): UnpackedImageData[] => {
    const media = raw?.images ?? [];
    return media
        .map(unpackImageData)
        .filter((x): x is UnpackedImageData => x !== null);
};

export const getVideos = (rawMedia?: MediaFrontmatter): RawVideoData[] => {
    return rawMedia?.videos || [];
};

export const getThumbnail = (
    imagesAndVideos?: MediaFrontmatter,
): ImageSource | null => {
    const firstImage = getImages(imagesAndVideos)[0];
    if (!firstImage) return null;
    if (isExternalUrl(firstImage.image)) return firstImage.image;
    return getImage(firstImage.image) ?? null;
};
