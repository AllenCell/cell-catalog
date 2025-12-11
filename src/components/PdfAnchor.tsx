import React from "react";

interface PdfAnchorProps {
    label: string;
    href: string;
}

export const PdfAnchor = ({ label, href }: PdfAnchorProps) => {
    return (
        <a href={href} download={true}>
            {label}
        </a>
    );
};

export default PdfAnchor;
