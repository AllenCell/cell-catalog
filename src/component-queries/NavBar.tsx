import { Flex } from "antd";
import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";

import HamburgerMenu from "../components/HamburgerMenu/HamburgerMenu";
import NavBarDropdown from "../components/NavBarDropdown/NavBarDropdown";
import { formatDropdownMenuItems } from "../components/NavBarDropdown/formatDropDownMenuItems";
import { NavBarDropdownItem, NavBarDropdownItemGroup } from "./types";

const AllenLogo = require("../img/aics-logo-white.png");

const {
    container,
    content,
    divider,
    hamburgerMenu,
    leftContent,
    logoLink,
    rightContent,
    dropdownButtons,
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
    const [dropdownKey, setDropdownKey] = useState(0);

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

    const { catalogs, diseaseCollections, protocols } =
        data.markdownRemark.frontmatter;

    const formattedCatalogs = formatDropdownMenuItems(catalogs);
    const formattedProtocols = formatDropdownMenuItems(protocols);
    const formattedDiseaseCollections =
        formatDropdownMenuItems(diseaseCollections);

    // Handles edge case where menus are open during a resize that goes
    // below the mobile breakpoint by forcing remount of dropdowns when
    // crossing the breakpoint.
    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768;
            if (isMobile) {
                setDropdownKey((prev) => prev + 1);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
                    <div className={dropdownButtons} key={`left-${dropdownKey}`}>
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
                </div>
                <div className={rightContent}>
                    <div className={dropdownButtons} key={dropdownKey}>
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
                    {/* Displayed on small screens */}
                    <div className={hamburgerMenu}>
                        <HamburgerMenu
                            catalogItems={formattedCatalogs}
                            protocolItems={formattedProtocols}
                            collectionItems={formattedDiseaseCollections}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
