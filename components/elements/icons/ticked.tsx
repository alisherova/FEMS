import * as React from "react";
import {IIconProps} from "types";

const TickedSvg = (props: IIconProps) => (
    <svg
        width={props.width || 24}
        height={props.height || 24}
        fill="none"
        viewBox='0 0 24 24'
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m9 12 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            stroke={props.color || "#2563EB"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default TickedSvg;
