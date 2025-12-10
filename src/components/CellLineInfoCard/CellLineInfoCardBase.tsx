import Icon from "@ant-design/icons";
import { Button, Card, Flex, Tooltip } from "antd";
import classNames from "classnames";
import React, { ReactNode, useState } from "react";

import { formatCellLineId } from "../../utils";
import { DarkThemeGhostButton, DefaultButton } from "../shared/Buttons";
import InfoPanel from "../shared/InfoPanel";
import { InfoTableRow } from "./types";

const Share = require("../../img/share-icon.svg");
const LinkOut = require("../../img/external-link.svg");

const {
    container,
    disabled,
    extraLargeButton,
    extraLargeButtonHeader,
    spacedButton,
    title,
} = require("../../style/cell-line-info-card.module.css");

interface OrderButtonProps {
    label: string;
    disabledLabel: string;
    href: string;
    icon?: ReactNode;
    subtitle?: ReactNode;
}

interface CellLineInfoCardBaseProps {
    href: string;
    cellLineId: number;
    infoRows: InfoTableRow[];
    certificateOfAnalysis: string;
    healthCertificate: string;
    orderLink: string;
    buttonList: OrderButtonProps[];
    additionalInfo?: ReactNode;
    multiGene?: boolean;
}

const CellLineInfoCardBase = ({
    additionalInfo,
    buttonList,
    cellLineId,
    certificateOfAnalysis,
    healthCertificate,
    href,
    infoRows,
    multiGene,
}: CellLineInfoCardBaseProps) => {
    const defaultToolTipText = "Copy cell line link to clipboard";
    const [shareTooltipText, setShareTooltipText] =
        useState(defaultToolTipText);

    const getDefaultButton = (label: string, href: string) => (
        <DefaultButton key={href} href={href} target="_blank" rel="noreferrer">
            {label}
        </DefaultButton>
    );

    const getOrderButton = ({
        disabledLabel,
        href,
        icon,
        label,
        subtitle,
    }: OrderButtonProps, key: string) => {
        const isDisabled = !href;
        const buttonClass = classNames(extraLargeButton, {
            [disabled]: isDisabled,
        });

        const button = (
            <Button
                type="primary"
                className={buttonClass}
                href={href}
                target="_blank"
                rel="noreferrer"
                disabled={isDisabled}
                key={key}
            >
                <div
                    className={classNames(
                        extraLargeButtonHeader,
                        icon && spacedButton,
                    )}
                >
                    <h2>
                        {icon}
                        {label}
                    </h2>
                    <LinkOut />
                </div>
                {subtitle}
            </Button>
        );

        return isDisabled ? (
            <Tooltip key={label} title={disabledLabel}>
                {button}
            </Tooltip>
        ) : (
            button
        );
    };

    const titleContents = (
        <Flex justify="space-between" align="center">
            <div className={title}>{formatCellLineId(cellLineId)}</div>
            <Tooltip title={shareTooltipText} placement="bottom">
                <DarkThemeGhostButton
                    onMouseEnter={() => {
                        if (!shareTooltipText) {
                            setShareTooltipText(defaultToolTipText);
                        }
                    }}
                    onClick={() => {
                        navigator.clipboard.writeText(href).then(() => {
                            setShareTooltipText("Copied!");
                            setTimeout(() => {
                                setShareTooltipText("");
                            }, 1000);
                        });
                    }}
                >
                    Share
                    <Icon
                        component={Share}
                        style={{
                            fontSize: "18px",
                        }}
                    />
                </DarkThemeGhostButton>
            </Tooltip>
        </Flex>
    );
    return (
        <Card title={titleContents} className={container}>
            <InfoPanel
                data={infoRows}
                baseline={multiGene}
                alignContent={true}
            />
            {additionalInfo}
            <Flex vertical gap={8}>
                {getDefaultButton(
                    "Certificate of Analysis",
                    certificateOfAnalysis,
                )}
                {getDefaultButton("hPSCreg Certificate", healthCertificate)}
            </Flex>
            {buttonList.map((button, index) => getOrderButton(button, index.toString()))}
        </Card>
    );
};

export default CellLineInfoCardBase;
