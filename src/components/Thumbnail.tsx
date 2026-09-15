import classNames from "classnames";
import React from "react";

import { ImageSource } from "../component-queries/types";
import ImageRenderer from "./shared/ImageRenderer";

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
                <ImageRenderer
                    image={image}
                    alt="thumbnail image"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
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
