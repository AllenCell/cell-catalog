import { Link } from "gatsby";
import React from "react";

interface NavLinkProps {
    label: string | JSX.Element;
    href: string;
    samePage?: boolean;
}

export const NavLink = ({ href, label, samePage }: NavLinkProps) => {
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

export default NavLink;
