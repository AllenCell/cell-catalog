import React from "react";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined, LoginOutlined } from "@ant-design/icons";
import PlasmidIcon from "./Icons/PlasmidIcon";
import TubeIcon from "./Icons/TubeIcon";

const {
    dropdownTrigger,
    dropdownPopupWrapper,
    hasBottomBorder,
    tubeIcon,
    plasmidIcon
} = require("../style/navbarDropdown.module.css");

export interface NavBarDropdownItem {
    label: string;
    href?: string;
}

export interface NavBarDropdownItemGroup {
    label: string;
    options: NavBarDropdownItem[];
}

export interface NavBarDropdownProps {
    label: string;
    items: NavBarDropdownItem[] | NavBarDropdownItemGroup[];
    buttonComponent?: React.ReactNode;
    onItemClick?: (item: NavBarDropdownItem) => void;
    open?: boolean;
}
const cellLineCollectionComponent = (
    <div className={tubeIcon} style={{fontSize: "14px"}}> <TubeIcon size={24} /> {` Cell Line Collection (Coriell `} <LoginOutlined /> {` )   `}</div>
)

const plasmidCollectionComponent = (
    <div className={plasmidIcon} style={{fontSize: "14px"}}> <PlasmidIcon size={20} /> {` Plasmid Collection (addgene `} <LoginOutlined /> {` )   `}</div>
)

// Type guard to check if items are grouped
const isGroupedItems = (
    items: NavBarDropdownItem[] | NavBarDropdownItemGroup[]
): items is NavBarDropdownItemGroup[] => {
    return items.length > 0 && "options" in items[0];
};

const getFlatItems = (
    items: NavBarDropdownItem[],
    onItemClick?: (item: NavBarDropdownItem) => void
): MenuProps["items"] => {
    return items.map((item, idx) => {
        const itemLabel = item.label === "Cell Line Collection" ? cellLineCollectionComponent : item.label === "Plasmid Collection" ? 
        plasmidCollectionComponent : item.href ? (
            <a href={
                item.href}>{item.label}</a>
                ) : (
                    item.label
                    );
        return ({
        key: item.label,
        className: idx < items.length -1 ? hasBottomBorder : undefined,
        label: itemLabel,
        onClick: () => {
            if (onItemClick) {
                onItemClick(item);
            }
        },
    })});
};

const getGroupedMenuItems = (
    groups: NavBarDropdownItemGroup[],
    onItemClick?: (item: NavBarDropdownItem) => void
): MenuProps["items"] => {
    return groups.map((group, groupIndex) => ({
        type: "group" as const,
        label: <div className={hasBottomBorder}>{group.label}</div>,
        key: `group-${groupIndex}`,
        children: group.options.map((item) => ({
            key: item.label,
            label: item.href ? (
                <a href={item.href}>{item.label}</a>
            ) : item.label,
            onClick: () => {
                if (onItemClick) {
                    onItemClick(item);
                }
            },
        })),
    }));
};

const getMenuItems = (
    items: NavBarDropdownItem[] | NavBarDropdownItemGroup[],
    onItemClick?: (item: NavBarDropdownItem) => void
): MenuProps["items"] => {
    if (isGroupedItems(items)) {
        return getGroupedMenuItems(items, onItemClick);
    }
    return getFlatItems(items, onItemClick);
};

const NavBarDropdown: React.FC<NavBarDropdownProps> = ({
    label,
    items,
    buttonComponent,
    onItemClick,
    open,
}) => {

    const menuItems = getMenuItems(items, onItemClick);
    console.log(`NavBarDropdown "${label}" - menuItems:`, menuItems);

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
                    <div className={dropdownPopupWrapper}>
                            {menus}
                    </div>
                )}
                {...(open !== undefined && { open })}
            >
                {buttonComponent || defaultButton}
            </Dropdown>
    );
};

export default NavBarDropdown;
