import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import React from "react";

import { ImageSource } from "../../component-queries/types";
import { isExternalUrl } from "../../utils/mediaUtils";

interface ImageRendererProps {
    image: ImageSource;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    imgStyle?: React.CSSProperties;
    onClick?: () => void;
}

// handle both Gatsby image data and external URLs
const ImageRenderer: React.FC<ImageRendererProps> = ({
    alt,
    className,
    image,
    imgStyle,
    onClick,
    style,
}) => {
    if (isExternalUrl(image)) {
        return (
            <img
                src={image}
                alt={alt}
                className={className}
                style={{ ...style, ...imgStyle }}
                onClick={onClick}
            />
        );
    }
    const resolved = getImage(image as IGatsbyImageData);
    if (!resolved) return null;
    return (
        <GatsbyImage
            image={resolved}
            alt={alt}
            className={className}
            style={onClick ? { cursor: "pointer", ...style } : style}
            imgStyle={imgStyle}
            onClick={onClick}
        />
    );
};

export default ImageRenderer;
