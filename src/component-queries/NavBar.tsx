import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Flex } from "antd";
import NavBarDropdown from "../components/NavBarDropdown";
import { NavBarDropdownItem, NavBarDropdownItemGroup } from "./types";

const AllenLogo = require("../img/aics-logo-white.png");

const {
    content,
    divider,
    leftContent,
    logoLink,
    pageHeader,
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
            markdownRemark(
                frontmatter: { templateKey: { eq: "nav-bar" } }
            ) {
                frontmatter {
                    catalogs {
                        label
                        href
                    }
                    protocols {
                        label
                        options {
                            label
                            href
                        }
                    }
                    normalCollections {
                        label
                        href
                    }
                    diseaseCollections {
                        label
                        href
                    }
                }
            }
        }
    `);

    const { catalogs, protocols, diseaseCollections } =
        data.markdownRemark.frontmatter;

    return (
        <div className={pageHeader}>
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
                        items={catalogs}
                    />
                </div>
                <div className={rightContent}>
                    <Flex gap="large">
                        <NavBarDropdown
                            label="Protocols"
                            items={protocols}
                        />
                        <NavBarDropdown
                            label="Collections"
                            items={diseaseCollections}
                        />
                    </Flex>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
