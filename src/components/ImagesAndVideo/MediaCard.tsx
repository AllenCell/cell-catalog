import { Card, Flex } from "antd";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

import { ImageOrVideo } from "../../component-queries/types";
import { isCloudinaryUrl, isImage } from "../../utils/mediaUtils";

const {
    caption,
    primaryImageContainer,
    primaryImageOnly,
    primaryImageWithThumbnail,
    videoContainer,
    videoIframe,
} = require("../../style/images-and-videos.module.css");

interface MediaCardProps {
    className?: string;
    item: ImageOrVideo;
    title: React.JSX.Element;
    index: number;
    isMobile: boolean;
    handleClick: () => void;
    thumbnails?: React.JSX.Element;
}

const renderMediaContent = (
    item: ImageOrVideo,
    showThumbnails: boolean = false,
    onClickHandler?: () => void,
) => {
    const className = showThumbnails
        ? primaryImageWithThumbnail
        : primaryImageOnly;
    const isImageItem = isImage(item);

    if (isImageItem) {
        if (isCloudinaryUrl(item.image)) {
            return (
                <img
                    className={className}
                    src={item.image}
                    alt="Cell line media"
                    style={{
                        objectFit: "contain",
                        cursor: onClickHandler ? "pointer" : undefined,
                        maxWidth: "100%",
                    }}
                    onClick={onClickHandler}
                />
            );
        }
        return (
            <GatsbyImage
                className={className}
                image={item.image}
                alt="Cell line media"
                imgStyle={{ objectFit: "contain" }}
                style={onClickHandler ? { cursor: "pointer" } : undefined}
                onClick={onClickHandler}
            />
        );
    }

    return (
        <div className={`${className} ${videoContainer}`}>
            <iframe
                src={`${item.video}?badge=0&autoplay=1&muted=1&loop=1&title=0`}
                className={videoIframe}
                title="Cell line video"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export const MediaCard = ({
    className,
    handleClick,
    index,
    isMobile,
    item,
    thumbnails,
    title,
}: MediaCardProps) => {
    return (
        <Card key={index} className={className} title={title}>
            <Flex
                className={primaryImageContainer}
                align="center"
                vertical
                justify="center"
                gap={isMobile ? 10 : 20}
                onClick={handleClick}
            >
                {renderMediaContent(item, false)}
                {item.caption && <p className={caption}>{item.caption}</p>}
            </Flex>
            {thumbnails}
        </Card>
    );
};
