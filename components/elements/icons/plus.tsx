import * as React from "react";
import {IIconProps} from "types";

const PlusSvg = (props: IIconProps) => (
    <svg
        width={props.width || 20}
        height={props.height || 20}
        fill="none"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M10 3.333v13.334M16.667 10H3.333"
            stroke={props.color || "#9CA3AF"}
            strokeWidth={1.667}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default PlusSvg;
