import React from "react";

interface LinkOutProps {
    label: string | React.ReactNode;
    href: string;
    samePage?: boolean;
}

export const LinkOut = ({ href, label, samePage }: LinkOutProps) => {
    return (
        <a
            href={href}
            target={samePage ? "" : "_blank"}
            rel={samePage ? "" : "noopener noreferrer"}
        >
            {label}
        </a>
    );
};

export default LinkOut;
