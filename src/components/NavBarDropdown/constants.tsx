import { LoginOutlined } from "@ant-design/icons";
import React from "react";
import PlasmidIcon from "../Icons/PlasmidIcon";
import TubeIcon from "../Icons/TubeIcon";

const {
    tubeIcon,
    plasmidIcon,
} = require("../../style/navbarDropdown.module.css");

const CELL_LINE_COLLECTION_LABEL = "Cell Line Collection";
const PLASMID_COLLECTION_LABEL = "Plasmid Collection";

const CELL_LINE_COLLECTION_COMPONENT = <div className={tubeIcon} style={{ fontSize: "14px" }}>
            <TubeIcon size={24} /> {` Cell Line Collection (Coriell `}{" "}
            <LoginOutlined /> {` )   `}
        </div>

const PLASMID_COLLECTION_COMPONENT = <div className={plasmidIcon} style={{ fontSize: "14px" }}>
                <PlasmidIcon size={20} /> {` Plasmid Collection (addgene `}{" "}
                <LoginOutlined /> {` )   `}
            </div>;

export const COLLECTION_COMPONENTS_MAP: Record<string, JSX.Element> = {
    [CELL_LINE_COLLECTION_LABEL]: CELL_LINE_COLLECTION_COMPONENT,
    [PLASMID_COLLECTION_LABEL]: PLASMID_COLLECTION_COMPONENT,
};