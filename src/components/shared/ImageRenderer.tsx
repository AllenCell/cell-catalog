import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

import { ImageSource } from "../../component-queries/types";
import { isExternalUrl } from "../../utils/mediaUtils";

interface ImageRendererProps {
    image: ImageSource;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

// handle both Gatsby image data and external URLs
const ImageRenderer: React.FC<ImageRendererProps> = ({
    alt,
    className,
    image,
    onClick,
    style,
}) => {
    if (isExternalUrl(image)) {
        return (
            <img
                src={image}
                alt={alt}
                className={className}
                style={style}
                onClick={onClick}
            />
        );
    }
    return (
        <GatsbyImage
            image={image as IGatsbyImageData}
            alt={alt}
            className={className}
            style={onClick ? { cursor: "pointer", ...style } : style}
            onClick={onClick}
        />
    );
};

export default ImageRenderer;
