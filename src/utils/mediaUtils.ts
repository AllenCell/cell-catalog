import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { RawImageData, UnpackedImageData, RawVideoData, MediaFrontmatter, ImageOrVideo } from "../component-queries/types";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

// type guard to distinguish images and videos at runtime
export function isImage(item: ImageOrVideo): item is UnpackedImageData {
  return "image" in item;
}

export const getImageSrcFromFileNode = (file: FileNode): string | undefined  => {
  return file.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
}

// flatten and validate image data
export function unpackImageData(
  x: RawImageData
): UnpackedImageData | null {
  return { image: x.image.childImageSharp.gatsbyImageData, caption: x.caption };
}

export const hasMedia = (rawMedia?: MediaFrontmatter): boolean => {
  return Boolean(rawMedia?.images?.length || rawMedia?.videos?.length);
};

export const getImages = (raw?: MediaFrontmatter): UnpackedImageData[] => {
  const media = (raw?.images ?? []);
  return media.map(unpackImageData)
    .filter((x): x is UnpackedImageData => x !== null);
}

export const getVideos = (rawMedia?: MediaFrontmatter): RawVideoData[] => {
  return rawMedia?.videos || [];
};

export const getThumbnail = (imagesAndVideos?: MediaFrontmatter): IGatsbyImageData | null => {
  const firstImage = getImages(imagesAndVideos)[0];
  return firstImage ? getImage(firstImage.image) ?? null : null;
};