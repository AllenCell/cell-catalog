import React from "react";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined, LoginOutlined } from "@ant-design/icons";
import PlasmidIcon from "./Icons/PlasmidIcon";
import TubeIcon from "./Icons/TubeIcon";
import { normalizeUrl } from "../utils";
import {
    NavBarDropdownItem,
    NavBarDropdownItemGroup,
} from "../component-queries/types";

const {
    dropdownTrigger,
    dropdownPopupWrapper,
    hasBottomBorder,
    tubeIcon,
    plasmidIcon,
} = require("../style/navbarDropdown.module.css");

export interface NavBarDropdownProps {
    label: string;
    items: NavBarDropdownItem[] | NavBarDropdownItemGroup[];
    buttonComponent?: React.ReactNode;
}

const getCellLineCollectionComponent = (href: string) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <div className={tubeIcon} style={{ fontSize: "14px" }}>
            <TubeIcon size={24} /> {` Cell Line Collection (Coriell `}{" "}
            <LoginOutlined /> {` )   `}
        </div>
    </a>
);

const getPlasmidCollectionComponent = (href: string) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <div className={plasmidIcon} style={{ fontSize: "14px" }}>
            <PlasmidIcon size={20} /> {` Plasmid Collection (addgene `}{" "}
            <LoginOutlined /> {` )   `}
        </div>
    </a>
);

const getLinkOut = (label: string, href: string) => {
    console.log("Generating link out for:", label, href);
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {label}
        </a>
    );
};

const getPdfDownloadAnchor = (label: string, href: string) => {
    return (
        <a href={href} download={true}>
            {label}
        </a>
    );
};

const isGroupedItems = (
    items: NavBarDropdownItem[] | NavBarDropdownItemGroup[]
): items is NavBarDropdownItemGroup[] => {
    return items.length > 0 && "options" in items[0];
};

const getItemComponent = (item: NavBarDropdownItem) => {
    const normalizedHref = item.href ? normalizeUrl(item.href) : undefined;

    if (item.label === "Cell Line Collection" && normalizedHref) {
        return getCellLineCollectionComponent(normalizedHref);
    } else if (item.label === "Plasmid Collection" && normalizedHref) {
        return getPlasmidCollectionComponent(normalizedHref);
    }

    const isPdf = normalizedHref?.endsWith(".pdf");
    if (normalizedHref) {
        if (isPdf) {
            return getPdfDownloadAnchor(item.label, normalizedHref);
        } else {
            return getLinkOut(item.label, normalizedHref);
        }
    } else {
        return item.label;
    }
};

const getFlatItems = (items: NavBarDropdownItem[]): MenuProps["items"] => {
    return items.map((item, idx) => {
        const itemLabel = getItemComponent(item);
        return {
            key: item.label,
            className: idx < items.length - 1 ? hasBottomBorder : undefined,
            label: itemLabel,
        };
    });
};

const getGroupedMenuItems = (
    groups: NavBarDropdownItemGroup[]
): MenuProps["items"] => {
    return groups.map((group, groupIndex) => ({
        type: "group" as const,
        label: <div className={hasBottomBorder}>{group.label}</div>,
        key: `group-${groupIndex}`,
        children: group.options.map((item) => {
            const labelTag = getItemComponent(item);
            return {
                key: item.label,
                label: labelTag,
            };
        }),
    }));
};

const getMenuItems = (
    items: NavBarDropdownItem[] | NavBarDropdownItemGroup[]
): MenuProps["items"] => {
    if (isGroupedItems(items)) {
        return getGroupedMenuItems(items);
    }
    return getFlatItems(items);
};

const NavBarDropdown: React.FC<NavBarDropdownProps> = ({
    label,
    items,
    buttonComponent,
}) => {
    const menuItems = getMenuItems(items);

    const defaultButton = (
        <Button className={dropdownTrigger} type="text">
            {label}
            <DownOutlined style={{ fontSize: "12px" }} />
        </Button>
    );

    return (
        <Dropdown
            menu={{ items: menuItems }}
            placement="bottomRight"
            align={{ offset: [0, 20] }}
            popupRender={(menus) => (
                <div className={dropdownPopupWrapper}>{menus}</div>
            )}
        >
            {buttonComponent || defaultButton}
        </Dropdown>
    );
};

export default NavBarDropdown;
