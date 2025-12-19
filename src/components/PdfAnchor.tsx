import React from "react";

interface PdfAnchorProps {
    label: string;
    href: string;
}

export const PdfAnchor = ({ href, label }: PdfAnchorProps) => {
    const filename = href.split("/").pop();
    const pdfHref = `/pdf/${filename}`;
    return (
        <a href={pdfHref} target="_blank" rel="noreferrer">
            {label}
        </a>
    );
};

export default PdfAnchor;
