import { Flex, Tabs } from "antd";
import React, { useState } from "react";

import { useTabletBreakpoint } from "../../hooks/useWidthBreakpoint";
import { SubPage } from "../../types";
import EditingDesignSubpage from "./EditingDesign";
import GenomicCharacterization from "./GenomicCharacterization";
import StemCellChar from "./StemCellChar";
import {
    UnpackedEditingDesign,
    UnpackedGenomicCharacterization,
    UnpackedStemCellCharacteristics,
} from "./types";

const {
    container,
    labelGroup,
    mobileTabBar,
    mobileTabButton,
    mobileTabButtonActive,
    noData,
    mobileTabBar,
    mobileTabButton,
    mobileTabButtonActive,
} = require("../../style/subpage-tabs.module.css");

export interface SubpageTabsProps {
    tabsToRender: SubPage[];
    editingDesignData: UnpackedEditingDesign | null;
    genomicCharacterizationData: UnpackedGenomicCharacterization | null;
    stemCellCharacteristics: UnpackedStemCellCharacteristics | null;
}

const SubpageTabs: React.FC<SubpageTabsProps> = ({
    editingDesignData,
    genomicCharacterizationData,
    stemCellCharacteristics,
    tabsToRender,
}) => {
    const [activeTab, setActiveTab] = useState<SubPage>(
        tabsToRender[0] || SubPage.EditingDesign,
    );
    const isTablet = useTabletBreakpoint();

    const getNoDataComponent = (tab: SubPage) => {
        return (
            <div className={noData}>
                {tab} not yet available for this cell line.
            </div>
        );
    };

    const tabComponents = {
        [SubPage.EditingDesign]: editingDesignData ? (
            <EditingDesignSubpage {...editingDesignData} />
        ) : (
            getNoDataComponent(SubPage.EditingDesign)
        ),
        [SubPage.GenomicCharacterization]: genomicCharacterizationData ? (
            <GenomicCharacterization {...genomicCharacterizationData} />
        ) : (
            getNoDataComponent(SubPage.GenomicCharacterization)
        ),
        [SubPage.StemCellCharacteristics]: stemCellCharacteristics ? (
            <StemCellChar {...stemCellCharacteristics} />
        ) : (
            getNoDataComponent(SubPage.StemCellCharacteristics)
        ),
    };

    const renderTabLabel = (tabName: SubPage) => {
        const label = tabName.split(" ").map((word) => {
            return <span key={word}>{word}</span>;
        });
        return (
            <Flex wrap justify="center" align="center" className={labelGroup}>
                {label}
            </Flex>
        );
    };

    if (isTablet) {
        return (
            <div className={container}>
                <div className={mobileTabBar}>
                    {tabsToRender.map((tabName) => (
                        <button
                            key={tabName}
                            className={`${mobileTabButton} ${
                                activeTab === tabName
                                    ? mobileTabButtonActive
                                    : ""
                            }`}
                            onClick={() => setActiveTab(tabName)}
                        >
                            {renderTabLabel(tabName)}
                        </button>
                    ))}
                </div>
                {tabComponents[activeTab]}
            </div>
        );
    }

    return (
        <Tabs
            className={container}
            activeKey={activeTab}
            onChange={(key) => setActiveTab(key as SubPage)}
            items={tabsToRender.map((tabName) => ({
                label: renderTabLabel(tabName),
                key: tabName,
                children: tabComponents[tabName],
            }))}
        />
    );
};

export default SubpageTabs;
