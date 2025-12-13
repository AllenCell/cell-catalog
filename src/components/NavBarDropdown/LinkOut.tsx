import { Link } from "gatsby";
import React from "react";

interface LinkOutProps {
    label: string | JSX.Element;
    href: string;
    samePage?: boolean;
}

export const LinkOut = ({ href, label, samePage }: LinkOutProps) => {
    // for internal links using gatsby Link because it's a faster navigation
    // and it will take you to the top of the page, which is the expected behavior for
    // nav bar links
    if (samePage) {
        return <Link to={href}>{label}</Link>;
    }
    return (
        <a href={href} target={"_blank"} rel={"noopener noreferrer"}>
            {label}
        </a>
    );
};

export default LinkOut;
