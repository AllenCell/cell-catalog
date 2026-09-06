import { CardProps } from "antd";
import classNames from "classnames";
import React from "react";

import { ImageSource } from "../../component-queries/types";
import ImageRenderer from "./ImageRenderer";
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

    return (
        <SubpageContentCard
            {...cardProps}
            title={cardTitle}
            caption={caption}
            className={classNames(container, className)}
        >
            <ImageRenderer
                image={image}
                alt={cardTitle || "diagram"}
                style={{ marginBottom: 16, maxWidth: "100%" }}
            />
        </SubpageContentCard>
    );
};

export default DiagramCard;
