import { Flex, Table, Tag } from "antd";
import { navigate } from "gatsby";
import React, { useState } from "react";

import { CellLineStatus } from "../../component-queries/types";
import useEnv from "../../hooks/useEnv";
import {
    useMobileBreakpoint,
    useTabletBreakpoint,
} from "../../hooks/useWidthBreakpoint";
import { CellLineColumns, TableStatus, UnpackedCellLine } from "./types";

const {
    categoryText,
    comingSoon,
    container,
    dataComplete,
    emptyMessage,
    hoveredRow,
    link,
    tableTitle,
    titleContainer,
} = require("../../style/table.module.css");

interface CellLineTableProps {
    tableName: string;
    cellLines: UnpackedCellLine[];
    released: boolean;
    columns: CellLineColumns<UnpackedCellLine>;
    mobileConfig?: {
        expandedRowRender: (
            record: UnpackedCellLine,
            index: number,
        ) => React.ReactNode;
    };
    tableDescription?: string;
    suppressRowClickRef?: React.MutableRefObject<boolean>;
}

const CellLineTable = ({
    cellLines,
    columns,
    mobileConfig,
    released,
    suppressRowClickRef,
    tableDescription,
    tableName,
}: CellLineTableProps) => {
    const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);

    const inProgress = !released;
    const env = useEnv();
    const isTablet = useTabletBreakpoint();
    const isMobile = useMobileBreakpoint();

    const isClickable = (record: UnpackedCellLine): boolean => {
        if (suppressRowClickRef?.current) {
            return false;
        }
        return (
            record.status === CellLineStatus.DataComplete ||
            env !== "production"
        );
    };
    const onCellInteraction = (
        record: UnpackedCellLine,
        index: number | undefined,
    ) => {
        // creates a hover effect for the whole row, and takes the user to
        // the sub-page for the cell line. The reason
        // this couldn't be done at the row level, is that we have
        // two columns that are independently clickable and therefore
        // clicking on them shouldn't trigger the page change
        if (index === undefined) {
            return {};
        }
        return {
            className: index === hoveredRowIndex ? hoveredRow : "",
            onMouseEnter: () => setHoveredRowIndex(index),
            onMouseLeave: () => setHoveredRowIndex(-1),
            onClick: () => {
                // if we are not in production, make it easier to
                // navigate to the cell line page
                if (isClickable(record) && record.path) {
                    navigate(record.path, {
                        state: { fromCellCatalog: true },
                    });
                }
            },
        };
    };

    const interactiveColumns = columns.map((column) => {
        // the two clickable columns are the order cell line and
        // CoA column. They do not have the hover effect and
        // should not take you to the cell line page, and are not
        // sortable.
        if (column.className?.includes("action-column")) {
            if (isMobile) {
                // on mobile, remove the fixed property to evenly
                // distribute the columns
                return {
                    ...column,
                    fixed: undefined,
                };
            }
            return column;
        }
        const showMobileTitle =
            isMobile && "mobileTitle" in column && column.mobileTitle;

        return {
            ...column,
            title: (showMobileTitle
                ? column.mobileTitle
                : column.title) as typeof column.title,
            sorter: inProgress ? undefined : column.sorter,
            onCell: inProgress ? undefined : onCellInteraction,
            fixed: isMobile ? undefined : column.fixed, // disable fixed columns on mobile
        };
    });

    const noDataMessage = (
        <div className={emptyMessage}>
            <h2>We can't seem to find what you're looking for...</h2>
            <p>
                But don't cell yourself short! Try adjusting your search
                parameters or reach out to our{" "}
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://forum.allencell.org/"
                    className={link}
                >
                    forum
                </a>{" "}
                to ask about availability.
            </p>
            <p>
                Looking for a cell line with a disease mutation?{" "}
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://cell-catalog.allencell.org/disease-catalog/"
                    className={link}
                >
                    Check out our Disease Cell Catalog.
                </a>
            </p>
        </div>
    );

    return (
        <>
            <Table
                key={tableName}
                className={[container, inProgress ? comingSoon : ""].join(" ")}
                rowClassName={(record) =>
                    isClickable(record) ? dataComplete : ""
                }
                title={() => (
                    <Flex className={titleContainer} align="center">
                        <h3 className={tableTitle}>{tableName}</h3>
                        {tableDescription && !isTablet && (
                            <div className={categoryText}>
                                {tableDescription}
                            </div>
                        )}
                        {inProgress ? (
                            <Tag color="#00215F" style={{ color: "#fff" }}>
                                {TableStatus.ComingSoon}
                            </Tag>
                        ) : null}
                    </Flex>
                )}
                scroll={isMobile ? undefined : { x: "max-content" }}
                pagination={false}
                expandable={isTablet ? mobileConfig : undefined}
                columns={interactiveColumns}
                dataSource={cellLines}
                showSorterTooltip={false}
                sortDirections={["ascend", "descend", "ascend"]}
                showHeader={cellLines.length > 0}
                locale={{ emptyText: noDataMessage }}
            />
        </>
    );
};

export default CellLineTable;
