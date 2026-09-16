import { IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

import {
    ImageOrVideo,
    MediaFrontmatter,
    RawImageData,
    RawVideoData,
    UnpackedImageData,
} from "../component-queries/types";

// type guard to distinguish images and videos at runtime
export function isImage(item: ImageOrVideo): item is UnpackedImageData {
    return "image" in item;
}

export const getImageSrcFromFileNode = (file: FileNode): string | undefined => {
    return file.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
};

// flatten and validate image data
export function unpackImageData(x: RawImageData): UnpackedImageData | null {
    return {
        image: x.image.childImageSharp.gatsbyImageData,
        caption: x.caption,
    };
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

// pulls the numeric video id out of any vimeo.com url
export const getVimeoVideoId = (url: string): string | null => {
    const match = url.match(/vimeo\.com\/(?:.*\/)?(\d+)(?:[/?#]|$)/);
    return match ? match[1] : null;
};

// rewritten vimeo url to the embeddable player form
export const getVideos = (rawMedia?: MediaFrontmatter): RawVideoData[] => {
    return (rawMedia?.videos ?? []).map((v) => {
        const id = getVimeoVideoId(v.video);
        return id ? { ...v, video: `https://player.vimeo.com/video/${id}` } : v;
    });
};

export const getThumbnail = (
    imagesAndVideos?: MediaFrontmatter,
): IGatsbyImageData | null => {
    const firstImage = getImages(imagesAndVideos)[0];
    return firstImage ? (getImage(firstImage.image) ?? null) : null;
};
