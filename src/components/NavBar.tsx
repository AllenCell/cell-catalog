import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Flex } from "antd";
import NavBarDropdown, { NavBarDropdownItem, NavBarDropdownItemGroup } from "./NavBarDropdown";

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
    return (
        <StaticQuery
            query={graphql`
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
            `}
            render={(data: NavBarQueryData) => {
                const { catalogs, protocols, normalCollections, diseaseCollections } =
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
                                    onItemClick={(item) =>
                                        console.log("Clicked:", item)
                                    }
                                />
                            </div>
                            <div className={rightContent}>
                                <Flex gap="large">
                                    <NavBarDropdown
                                        label="Protocols"
                                        items={protocols}
                                        onItemClick={(item) =>
                                            console.log("Clicked:", item)
                                        }
                                        // open
                                    />
                                    <NavBarDropdown
                                        label="Collections"
                                        items={diseaseCollections}
                                        onItemClick={(item) =>
                                            console.log("Clicked:", item)
                                        }
                                    />
                                </Flex>
                            </div>
                        </div>
                    </div>
                );
            }}
        />
    );
};

export default NavBar;
