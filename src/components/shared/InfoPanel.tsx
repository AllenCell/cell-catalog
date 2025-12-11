import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";
import classNames from "classnames";
import React from "react";

interface InfoPanelProps {
    data: DescriptionsProps["items"];
    hasLegend?: boolean;
    baseline?: boolean;
    alignContent?: boolean;
}

const {
    aligned,
    container,
    legend,
} = require("../../style/info-panel.module.css");

const InfoPanel: React.FC<InfoPanelProps> = ({
    alignContent,
    baseline = true,
    data,
    hasLegend,
}) => {
    return (
        <div className={classNames(container, hasLegend && legend)}>
            <Descriptions
                className={alignContent && aligned}
                items={data}
                column={1}
                layout="horizontal"
                colon={false}
                styles={{
                    content: {
                        alignItems: "center",
                        fontWeight: "semi-bold",
                        lineHeight: "1.5",
                    },
                    label: {
                        alignItems: baseline ? "baseline" : "center",
                    },
                }}
            />
        </div>
    );
};

export default InfoPanel;
