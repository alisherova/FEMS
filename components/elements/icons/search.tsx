import * as React from "react";
import {IIconProps} from "types";

const SearchSvg = (props: IIconProps) => (
    <svg
        width={props.width || 20}
        height={props.height || 20}
        fill="none"
        viewBox='0 0 20 20'
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m17.5 17.5-5-5m1.667-4.167a5.833 5.833 0 1 1-11.667 0 5.833 5.833 0 0 1 11.667 0Z"
            stroke={props.color || "#9CA3AF"}
            strokeWidth={1.667}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SearchSvg;
