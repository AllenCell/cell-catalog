import { CardProps } from "antd";
import classNames from "classnames";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

import { ImageSource } from "../../component-queries/types";
import { isExternalUrl } from "../../utils/mediaUtils";
import SubpageContentCard from "./SubpageContentCard";

const { container } = require("../../style/diagram-card.module.css");

export interface DiagramCardProps extends CardProps {
    title?: string;
    image?: ImageSource;
    caption?: string;
    headerLeadText?: string;
}

const DiagramCard: React.FC<DiagramCardProps> = ({
    caption,
    className,
    headerLeadText,
    image,
    title,
    ...cardProps
}) => {
    if (!image) {
        return null;
    }

    const cardTitle = headerLeadText ? `${headerLeadText}: ${title}` : title;
    const isUrl = isExternalUrl(image);
    const imageData = !isUrl ? getImage(image) : null;

    return (
        <SubpageContentCard
            {...cardProps}
            title={cardTitle}
            caption={caption}
            className={classNames(container, className)}
        >
            {isUrl ? (
                <img
                    style={{ marginBottom: 16, maxWidth: "100%" }}
                    src={image}
                    alt={cardTitle || "diagram"}
                />
            ) : imageData ? (
                <GatsbyImage
                    style={{ marginBottom: 16 }}
                    image={imageData}
                    alt={cardTitle || "diagram"}
                />
            ) : null}
        </SubpageContentCard>
    );
};

export default DiagramCard;
