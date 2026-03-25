import { ZoomInOutlined, ZoomOutOutlined } from "@ant-design/icons";
import { Image, Space } from "antd";
import { getSrc } from "gatsby-plugin-image";
import React from "react";

import { ImageOrVideo, UnpackedImageData } from "../../component-queries/types";
import { isCloudinaryUrl } from "../../utils/mediaUtils";

interface ImagePreviewGroupProps {
    mediaItems: ImageOrVideo[];
    imageItems: UnpackedImageData[];
    previewVisible: boolean;
    setPreviewVisible: (visible: boolean) => void;
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
    setSelectedMedia: (item: ImageOrVideo) => void;
}

const {
    previewImage,
    toolbarWrapper,
} = require("../../style/images-and-videos.module.css");

export const PreviewGroup = ({
    currentIndex,
    imageItems,
    mediaItems,
    previewVisible,
    setCurrentIndex,
    setPreviewVisible,
    setSelectedMedia,
}: ImagePreviewGroupProps) => {
    const allPreviewImages = imageItems.map((item, i) => {
        const src = isCloudinaryUrl(item.image)
            ? item.image
            : getSrc(item.image);
        return (
            <Image
                key={`preview-${i}`}
                src={src}
                style={{ display: "none" }}
                className={previewImage}
            />
        );
    });

    return (
        <Image.PreviewGroup
            preview={{
                visible: previewVisible,
                className: previewImage,
                current: currentIndex,
                onVisibleChange: (visible) => setPreviewVisible(visible),
                onChange: (index) => {
                    const imageItem = imageItems[index];
                    if (imageItem) {
                        setSelectedMedia(imageItem);
                        const fullIndex = mediaItems.findIndex(
                            (item) => item === imageItem,
                        );
                        setCurrentIndex(fullIndex);
                    }
                },
                toolbarRender: (
                    _,
                    { actions: { onZoomIn, onZoomOut }, transform: { scale } },
                ) => (
                    <Space className={toolbarWrapper}>
                        <ZoomOutOutlined
                            disabled={scale <= 1}
                            onClick={onZoomOut}
                        />
                        <ZoomInOutlined
                            disabled={scale >= 10}
                            onClick={onZoomIn}
                        />
                    </Space>
                ),
            }}
        >
            {allPreviewImages}
        </Image.PreviewGroup>
    );
};
