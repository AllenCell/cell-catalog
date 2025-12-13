import { Flex } from "antd";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import NavBarDropdown from "../components/NavBarDropdown/NavBarDropdown";
import { formatDropdownMenuItems } from "../components/NavBarDropdown/formatDropDownMenuItems";
import { NavBarDropdownItem, NavBarDropdownItemGroup } from "./types";

const AllenLogo = require("../img/aics-logo-white.png");

const {
    container,
    content,
    divider,
    leftContent,
    logoLink,
    rightContent,
    titleLink,
} = require("../style/navbar.module.css");

interface NavBarQueryData {
    markdownRemark: {
        frontmatter: {
            catalogs: NavBarDropdownItem[];
            protocols: NavBarDropdownItemGroup[];
            normalCollections: NavBarDropdownItem[];
            diseaseCollections: NavBarDropdownItem[];
        };
    };
}

const NavBar: React.FC = () => {
    const data = useStaticQuery<NavBarQueryData>(graphql`
        query NavBarQuery {
            markdownRemark(frontmatter: { templateKey: { eq: "nav-bar" } }) {
                frontmatter {
                    catalogs {
                        label
                        href
                        anchorType
                    }
                    protocols {
                        label
                        options {
                            label
                            href
                            anchorType
                        }
                    }
                    normalCollections {
                        label
                        href
                        anchorType
                    }
                    diseaseCollections {
                        label
                        href
                        anchorType
                    }
                }
            }
        }
    `);

    const { catalogs, protocols, diseaseCollections } =
        data.markdownRemark.frontmatter;

    const formattedCatalogs = formatDropdownMenuItems(catalogs);
    const formattedProtocols = formatDropdownMenuItems(protocols);
    const formattedDiseaseCollections =
        formatDropdownMenuItems(diseaseCollections);

    return (
        <div className={container}>
            <div className={content}>
                <div className={leftContent}>
                    <a
                        href="https://allencell.org"
                        title="Allen Institute for Cell Science"
                        className={logoLink}
                    >
                        <img
                            src={AllenLogo.default || AllenLogo}
                            alt="Allen Institute Logo"
                            style={{ height: "36px" }}
                        />
                    </a>
                    <span className={divider}>|</span>
                    <NavBarDropdown
                        buttonComponent={
                            <div className={titleLink}>
                                Allen Cell Collection
                            </div>
                        }
                        label="Catalogs"
                        items={formattedCatalogs}
                    />
                </div>
                <div className={rightContent}>
                    <Flex gap="large">
                        <NavBarDropdown
                            label="Protocols"
                            items={formattedProtocols}
                        />
                        <NavBarDropdown
                            label="Collections"
                            items={formattedDiseaseCollections}
                        />
                    </Flex>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
