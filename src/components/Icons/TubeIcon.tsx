import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";
import classNames from "classnames";
import React from "react";

import TubeSVG from "../../img/tube.svg";

type IconBaseProps = Omit<IconComponentProps, "ref" | "component">;

interface TubeIconProps extends IconBaseProps {
    size?: number;
    className?: string;
    style?: React.CSSProperties;
}

const TubeIcon: React.FC<TubeIconProps> = ({
    className,
    size = 40,
    style,
    ...props
}) => {
    const mergedStyle: React.CSSProperties = {
        fontSize: `${size}px`,
        ...style,
    };

    return (
        <Icon
            className={classNames("tube-icon", className)}
            component={TubeSVG}
            style={mergedStyle}
            {...props}
        />
    );
};

export default TubeIcon;
