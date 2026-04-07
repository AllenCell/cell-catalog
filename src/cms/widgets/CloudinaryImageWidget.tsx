import React, { useCallback, useEffect, useRef } from "react";

import {
    CLOUDINARY_API_KEY,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_UPLOAD_PRESET,
} from "../cloudinaryConfig";

// Decap CMS passes Immutable.js Maps — type the minimal surface we use
interface ImmutableMap {
    get: (key: string) => unknown;
}

interface CloudinaryWidgetProps {
    value?: string;
    onChange: (value: string) => void;
    entry: ImmutableMap;
}

type CloudinaryWidgetInstance = {
    destroy: () => void;
    open: () => void;
};

type CloudinaryUploadResult = {
    event: string;
    info: { secure_url: string };
};

type CloudinaryWindow = Window & {
    cloudinary?: {
        createUploadWidget: (
            config: object,
            callback: (
                error: Error | null,
                result: CloudinaryUploadResult,
            ) => void,
        ) => CloudinaryWidgetInstance;
    };
};

// Load the Cloudinary Upload Widget script once
let scriptLoaded = false;
function loadCloudinaryScript(): Promise<void> {
    if (scriptLoaded) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src =
            "https://upload-widget.cloudinary.com/latest/global/all.js";
        script.onload = () => {
            scriptLoaded = true;
            resolve();
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

/**
 * Derives the Cloudinary upload folder from the current CMS entry.
 * Maps each collection's templateKey to a folder structure:
 *   cell-line          → cell-lines/AICS-{id}-{clone}
 *   disease-cell-line  → disease-cell-lines/AICS-{id}
 *   normal-catalog     → pages/normal-catalog
 *   disease-catalog    → pages/disease-catalog
 *   (unknown)          → uploads
 */
function getFolderFromEntry(entry: ImmutableMap): string {
    const data = entry?.get("data") as ImmutableMap | undefined;
    if (!data) return "uploads";

    const templateKey = data.get("templateKey") as string | undefined;
    const cellLineId = data.get("cell_line_id");
    const cloneNumber = data.get("clone_number");

    switch (templateKey) {
        case "cell-line":
            if (cellLineId != null && cloneNumber != null) {
                return `cell-lines/AICS-${cellLineId}-${cloneNumber}`;
            }
            return "cell-lines";
        case "disease-cell-line":
            if (cellLineId != null) {
                return `disease-cell-lines/AICS-${cellLineId}`;
            }
            return "disease-cell-lines";
        case "normal-catalog":
            return "pages/normal-catalog";
        case "disease-catalog":
            return "pages/disease-catalog";
        default:
            return "uploads";
    }
}

// Decap CMS passes `entry` to widget controls at runtime,
// but the TypeScript types don't declare it (Immutable.js Map).
// Cast needed at registration site (cms.tsx) for the same reason.
const CloudinaryImageWidget: React.FC<CloudinaryWidgetProps> = ({
    entry,
    onChange,
    value,
}) => {
    const widgetRef = useRef<CloudinaryWidgetInstance | null>(null);

    const openUploader = useCallback(async () => {
        await loadCloudinaryScript();

        const folder = getFolderFromEntry(entry);
        const cloudinary = (window as CloudinaryWindow).cloudinary;

        if (!cloudinary) {
            console.error("Cloudinary upload widget not loaded");
            return;
        }

        // Close any existing widget
        if (widgetRef.current) {
            widgetRef.current.destroy();
        }

        widgetRef.current = cloudinary.createUploadWidget(
            {
                cloudName: CLOUDINARY_CLOUD_NAME,
                uploadPreset: CLOUDINARY_UPLOAD_PRESET,
                apiKey: CLOUDINARY_API_KEY,
                folder: folder,
                sources: ["local", "url", "camera"],
                multiple: false,
                resourceType: "image",
                clientAllowedFormats: [
                    "jpg",
                    "jpeg",
                    "png",
                    "gif",
                    "webp",
                    "svg",
                    "tiff",
                ],
                showPoweredBy: false,
                styles: {
                    palette: {
                        window: "#FFFFFF",
                        windowBorder: "#607E96",
                        tabIcon: "#607E96",
                        menuIcons: "#5A616A",
                        textDark: "#000000",
                        textLight: "#FFFFFF",
                        link: "#607E96",
                        action: "#339933",
                        inactiveTabIcon: "#B3B3B3",
                        error: "#F44235",
                        inProgress: "#607E96",
                        complete: "#339933",
                        sourceBg: "#F4F4F5",
                    },
                },
            },
            (error: Error | null, result: CloudinaryUploadResult) => {
                if (error) {
                    console.error("Cloudinary upload error:", error);
                    return;
                }
                if (result.event === "success") {
                    const url = result.info.secure_url;
                    onChange(url);
                }
            },
        );

        widgetRef.current.open();
    }, [entry, onChange]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (widgetRef.current) {
                widgetRef.current.destroy();
            }
        };
    }, []);

    const folder = getFolderFromEntry(entry);
    const hasImage = value && value.length > 0;

    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "12px",
            }}
        >
            {hasImage && (
                <div style={{ marginBottom: "8px" }}>
                    <img
                        src={value}
                        alt="Uploaded"
                        style={{
                            maxWidth: "100%",
                            maxHeight: "200px",
                            objectFit: "contain",
                            borderRadius: "4px",
                        }}
                    />
                    <div
                        style={{
                            fontSize: "11px",
                            color: "#888",
                            marginTop: "4px",
                            wordBreak: "break-all",
                        }}
                    >
                        {value}
                    </div>
                </div>
            )}

            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <button
                    type="button"
                    onClick={openUploader}
                    style={{
                        padding: "8px 16px",
                        backgroundColor: "#607E96",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "14px",
                    }}
                >
                    {hasImage ? "Replace Image" : "Upload Image"}
                </button>

                {hasImage && (
                    <button
                        type="button"
                        onClick={() => onChange("")}
                        style={{
                            padding: "8px 16px",
                            backgroundColor: "#f5f5f5",
                            color: "#333",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontSize: "14px",
                        }}
                    >
                        Remove
                    </button>
                )}
            </div>

            <div
                style={{
                    fontSize: "11px",
                    color: "#888",
                    marginTop: "8px",
                }}
            >
                Uploads to: <strong>{folder}</strong>
            </div>
        </div>
    );
};

// Preview component for the CMS preview pane
const CloudinaryImagePreview: React.FC<{ value?: string }> = ({ value }) => {
    if (!value) return null;
    return (
        <img
            src={value}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
        />
    );
};

export { CloudinaryImageWidget, CloudinaryImagePreview };
