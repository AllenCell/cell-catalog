import React from "react";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

const {
    dropdownTrigger,
    dropdownPopupWrapper,
} = require("../../style/navbarDropdown.module.css");

export interface NavBarDropdownProps {
    label: string;
    items: MenuProps["items"];
    buttonComponent?: React.ReactNode;
}

const NavBarDropdown: React.FC<NavBarDropdownProps> = ({
    label,
    items,
    buttonComponent,
}) => {

    const defaultButton = (
        <Button className={dropdownTrigger} type="text">
            {label}
            <DownOutlined style={{ fontSize: "12px" }} />
        </Button>
    );

    return (
        <Dropdown
            menu={{ items: items }}
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
