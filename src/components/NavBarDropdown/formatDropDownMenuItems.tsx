import React from "react";
import { MenuProps } from "antd";
import classNames from "classnames";

import { NavBarAnchorType, NavBarDropdownItem, NavBarDropdownItemGroup } from "../../component-queries/types";
import LinkOut from "../LinkOut";
import PdfAnchor from "../PdfAnchor";
import { COLLECTION_COMPONENTS_MAP } from "./constants";

const {
    hasBottomBorder,
    groupTitle
} = require("../../style/navbarDropdown.module.css");

const isGroupedItems = (
    items: NavBarDropdownItem[] | NavBarDropdownItemGroup[]
): items is NavBarDropdownItemGroup[] => {
    return items.length > 0 && "options" in items[0];
};

const getItemComponent = (item: NavBarDropdownItem) => {
    if (item.anchorType === NavBarAnchorType.Download) {
        const filename = item.href.split('/').pop();
        return <PdfAnchor label={item.label} href={`/pdf/${filename}`} />;
    }

    if (item.anchorType === NavBarAnchorType.Internal) {
        return <LinkOut label={item.label} href={item.href}/>;
    }

    if (COLLECTION_COMPONENTS_MAP[item.label]) {
        return <LinkOut label={COLLECTION_COMPONENTS_MAP[item.label]} href={item.href} />;
    }

    return <LinkOut label={item.label} href={item.href} newTab={true} />;
};

const getFlatItems = (items: NavBarDropdownItem[]): MenuProps["items"] => {
    return items.map((item, idx) => {
        return {
            key: item.label,
            className: idx < items.length - 1 ? hasBottomBorder : undefined,
            label:  getItemComponent(item),
        };
    });
};

const getGroupedMenuItems = (
    groups: NavBarDropdownItemGroup[]
): MenuProps["items"] => {
    return groups.map((group, groupIndex) => ({
        type: "group" as const,
        label: <div className={classNames(hasBottomBorder, groupTitle)}>{group.label}</div>,
        key: `group-${groupIndex}`,
        children: group.options.map((item) => {
            return {
                key: item.label,
                label: getItemComponent(item),
            };
        }),
    }));
};

export const formatDropdownMenuItems = (
    items: NavBarDropdownItem[] | NavBarDropdownItemGroup[]
): MenuProps["items"] => {
    if (isGroupedItems(items)) {
        return getGroupedMenuItems(items);
    }
    return getFlatItems(items);
};