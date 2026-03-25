import classNames from "classnames";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

import { ImageSource } from "../component-queries/types";
import { isCloudinaryUrl } from "../utils/mediaUtils";

const {
    selectedThumbnail,
    thumbnail,
    video,
    videoThumbnailImage,
} = require("../style/thumbnail.module.css");

interface ThumbnailProps {
    image?: ImageSource;
    videoId?: string;
    isSelected: boolean;
    onClick: () => void;
    type?: "image" | "video";
}

const getVimeoThumbnail = (videoId: string) => {
    return `https://vumbnail.com/${videoId}.jpg`;
};

const Thumbnail: React.FC<ThumbnailProps> = ({
    image,
    isSelected,
    onClick,
    type = "image",
    videoId,
}) => {
    const renderImage = () => {
        if (!image) return null;
        if (isCloudinaryUrl(image)) {
            return (
                <img
                    src={image}
                    alt="thumbnail image"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            );
        }
        return (
            <GatsbyImage
                image={image as IGatsbyImageData}
                alt="thumbnail image"
            />
        );
    };

    return (
        <div
            onClick={onClick}
            className={classNames(thumbnail, {
                [selectedThumbnail]: isSelected,
                [video]: type === "video",
            })}
            role="button"
        >
            {type === "image" && image ? (
                renderImage()
            ) : (
                <img
                    src={getVimeoThumbnail(videoId || "") ?? ""}
                    alt="Video thumbnail"
                    className={videoThumbnailImage}
                />
            )}
        </div>
    );
};

export default Thumbnail;
