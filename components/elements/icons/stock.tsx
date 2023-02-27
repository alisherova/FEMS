import * as React from "react";
import {IIconProps} from "types";

const StockSvg = (props: IIconProps) => (
    <svg
        width={props.width || 20}
        height={props.height || 12}
        fill="none"
        viewBox='0 0 20 12'
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M11 1h8m0 0v8m0-8-8 8-4-4-6 6"
            stroke={props.color || "#9CA3AF"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default StockSvg;
