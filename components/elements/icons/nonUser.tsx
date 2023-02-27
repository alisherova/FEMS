import * as React from "react";
import {IIconProps} from "types";

const NonUserSvg = (props: IIconProps) => (
    <svg
        width={props.width || 24}
        height={props.height || 24}
        fill="none"
        viewBox='0 0 24 24'
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M21 12h-6m-2-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM3 20a6 6 0 0 1 12 0v1H3v-1Z"
            stroke={props.color || "#FBBF24"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default NonUserSvg;
