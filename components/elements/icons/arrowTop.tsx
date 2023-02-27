import * as React from "react";
import {IIconProps} from "types";

const ArrowTopSvg = (props: IIconProps) => (
    <svg
        width={props.width || 20}
        height={props.height || 20}
        fill="none"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M15.833 12.5 10 6.667 4.167 12.5"
            stroke={props.color || "#9CA3AF"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ArrowTopSvg;
