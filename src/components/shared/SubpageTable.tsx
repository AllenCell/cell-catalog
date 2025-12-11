import { CardProps, Table, TableProps } from "antd";
import { AnyObject } from "antd/es/_util/type";
import classNames from "classnames";
import React from "react";

import SubpageContentCard from "./SubpageContentCard";

const { container, table } = require("../../style/subpage-table.module.css");

export interface SubpageTableProps extends CardProps {
    title?: string;
    caption?: string;
    columns: TableProps<AnyObject>["columns"];
    dataSource: AnyObject[];
}

const SubpageTable: React.FC<SubpageTableProps> = ({
    caption,
    className,
    columns,
    dataSource,
    title,
    ...cardProps
}) => {
    if (dataSource.length === 0) {
        return null;
    }
    return (
        <SubpageContentCard
            {...cardProps}
            title={title}
            caption={caption}
            className={classNames(container, className)}
        >
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                bordered={false}
                className={table}
            />
        </SubpageContentCard>
    );
};

export default SubpageTable;
