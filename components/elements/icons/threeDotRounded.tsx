import * as React from "react";
import {IIconProps} from "types";

const ThreeDotsSvg = (props: IIconProps) => (
    <svg
        width={props.width || 20}
        height={props.height || 20}
        fill="none"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M6.667 10h.008M10 10h.008m3.325 0h.009m4.158 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
            stroke={props.color || "#9CA3AF"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default ThreeDotsSvg;
