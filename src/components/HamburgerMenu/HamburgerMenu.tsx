import React, { useState } from "react";
import { Button, Drawer } from "antd";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const {
    hamburgerButton,
    drawerContent,
    menuSection,
    sectionTitle,
    drawerContainer,
} = require("../../style/hamburgerMenu.module.css");

export interface HamburgerMenuProps {
    catalogItems: MenuProps["items"];
    protocolItems: MenuProps["items"];
    collectionItems: MenuProps["items"];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
    catalogItems,
    protocolItems,
    collectionItems,
}) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const sharedMenuProps: MenuProps = {
        selectedKeys: [],
        selectable: false,
    };

    return (
        <>
            <Button
                className={hamburgerButton}
                type="text"
                icon={<MenuOutlined />}
                onClick={showDrawer}
            />
            <Drawer
                title="Menu"
                placement="right"
                onClose={onClose}
                open={open}
                width={300}
                className={drawerContainer}
                destroyOnHidden
            >
                <div className={drawerContent}>
                    <div className={menuSection}>
                        <div className={sectionTitle}>Catalogs</div>
                        <Menu
                            items={catalogItems}
                            {...sharedMenuProps}
                        />
                    </div>
                    <div className={menuSection}>
                        <div className={sectionTitle}>Protocols</div>
                        <Menu
                            items={protocolItems}
                            {...sharedMenuProps}
                        />
                    </div>
                    <div className={menuSection}>
                        <div className={sectionTitle}>Collections</div>
                        <Menu
                            items={collectionItems}
                            {...sharedMenuProps}
                        />
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default HamburgerMenu;