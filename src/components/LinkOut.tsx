import React from "react";

interface LinkOutProps {
    label: string | React.ReactNode;
    href: string;
    newTab?: boolean;
}

export const LinkOut = ({label, href, newTab}: LinkOutProps) => {
    return (
        <a href={href} target={newTab ? "_blank": ""} rel={newTab ? "noopener noreferrer" : ""}>
            {label}
        </a>
    );
};

export default LinkOut;