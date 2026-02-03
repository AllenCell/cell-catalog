import { useLocation } from "@reach/router";
import { Flex } from "antd";
import React, { useState } from "react";

import {
    ImageOrVideo,
    RawVideoData,
    UnpackedImageData,
} from "../../component-queries/types";
import {
    useMobileBreakpoint,
    useTabletBreakpoint,
} from "../../hooks/useWidthBreakpoint";
import { formatCellLineId } from "../../utils";
import { isImage } from "../../utils/mediaUtils";
import Thumbnail from "../Thumbnail";
import { PreviewGroup } from "./ImagePreviewGroup";
import { MediaCard } from "./MediaCard";

const {
    container,
    header,
    mainTitle,
    mobileCardContainer,
    mobileMediaCard,
    rightTitle,
    subtitle,
    thumbnailContainer,
    titleSection,
} = require("../../style/images-and-videos.module.css");

interface ImagesAndVideosProps {
    images: UnpackedImageData[];
    cellLineId: number;
    videos: RawVideoData[];
    geneSymbol: string;
    snp?: string;
    fluorescentTag: string;
    parentalGeneSymbol?: string;
    alleleTag: string;
}

const ImagesAndVideos: React.FC<ImagesAndVideosProps> = ({
    alleleTag,
    cellLineId,
    fluorescentTag,
    geneSymbol,
    images,
    parentalGeneSymbol,
    videos,
}) => {
    const { pathname } = useLocation();
    const isDisease = pathname.includes("disease");
    const isTablet = useTabletBreakpoint();
    const isMobile = useMobileBreakpoint();
    const getVideoId = (url: string) => {
        const match = url.match(/player\.vimeo\.com\/video\/(\d+)/);
        return match ? match[1] : null;
    };

    const mediaItems: ImageOrVideo[] = [...images, ...videos];
    const [selectedMedia, setSelectedMedia] = useState<ImageOrVideo | null>(
        mediaItems[0] || null,
    );
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previewVisible, setPreviewVisible] = useState(false);

    const showThumbnails = mediaItems.length > 1;

    if (!selectedMedia) return null;

    const imageItems = mediaItems.filter(isImage);

    const renderThumbnail = (item: ImageOrVideo, index: number) => {
        const isSelected = selectedMedia === item;

        if (isImage(item)) {
            return (
                <Thumbnail
                    key={index}
                    image={item.image}
                    isSelected={isSelected}
                    onClick={() => {
                        setSelectedMedia(item);
                        setCurrentIndex(index);
                    }}
                    type="image"
                />
            );
        }

        const videoId = getVideoId(item.video) ?? "";

        return (
            <Thumbnail
                key={index}
                videoId={videoId}
                isSelected={isSelected}
                onClick={() => {
                    setSelectedMedia(item);
                    setCurrentIndex(index);
                }}
                type="video"
            />
        );
    };

    const thumbnails = showThumbnails ? (
        <Flex vertical style={{ minHeight: 0 }} className={thumbnailContainer}>
            {mediaItems.map(renderThumbnail).filter(Boolean)}
        </Flex>
    ) : undefined;

    const formatGeneSubtitle = () => {
        const base = `WTC-${fluorescentTag}`;
        return parentalGeneSymbol
            ? `${geneSymbol} in ${base}-${parentalGeneSymbol} (${alleleTag}-allelic tag)`
            : `${geneSymbol} in ${base} (${alleleTag}-allelic tag)`;
    };

    const title = (
        <Flex
            justify="space-between"
            className={header}
            vertical={isMobile}
            gap={isTablet ? 8 : 0}
        >
            <div className={titleSection}>
                <h3 className={mainTitle}>{formatCellLineId(cellLineId)}</h3>
                <span className={subtitle}>{formatGeneSubtitle()}</span>
            </div>
            {isDisease && (
                <span className={rightTitle}>
                    Representative media for all clones
                </span>
            )}
        </Flex>
    );

    const handleMediaClick = () => {
        // only show preview for images, not videos
        if (isImage(selectedMedia)) {
            setPreviewVisible(true);
        }
    };

    const previewGroup = imageItems.length > 0 && (
        <PreviewGroup
            currentIndex={currentIndex}
            imageItems={imageItems}
            mediaItems={mediaItems}
            previewVisible={previewVisible}
            setCurrentIndex={setCurrentIndex}
            setPreviewVisible={setPreviewVisible}
            setSelectedMedia={setSelectedMedia}
        />
    );

    // Mobile swipable view
    if (isTablet && mediaItems.length > 0) {
        return (
            <>
                {previewGroup}
                <div className={mobileCardContainer}>
                    {mediaItems.map((item, index) => (
                        <MediaCard
                            className={mobileMediaCard}
                            key={index}
                            index={index}
                            title={title}
                            isMobile={isMobile}
                            item={item}
                            handleClick={handleMediaClick}
                        />
                    ))}
                </div>
            </>
        );
    }

    return (
        <>
            {previewGroup}
            <MediaCard
                className={container}
                title={title}
                index={currentIndex}
                isMobile={isMobile}
                item={selectedMedia}
                handleClick={handleMediaClick}
                thumbnails={thumbnails}
            />
        </>
    );
};

export default ImagesAndVideos;
