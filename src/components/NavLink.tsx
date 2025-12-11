import { Link } from "gatsby";
import React from "react";

interface NavLinkProps {
    label: string | JSX.Element;
    href: string;
    samePage?: boolean;
}

export const NavLink = ({ href, label, samePage }: NavLinkProps) => {
    // internal link, so we want to use gatsby Link because it's a faster navigation
    // and it will take you to the top of the page, which is what nav bar links to do
    if (samePage) {
        return <Link to={href}>{label}</Link>;
    }
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

export default NavLink;
