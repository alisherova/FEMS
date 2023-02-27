import * as React from "react";
import {IIconProps} from "types";

const GraduationSvg = (props: IIconProps) => (
    <svg
        width={props.width || 24}
        height={props.height || 24}
        fill="none"
        viewBox='0 0 24 24'
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="m12 14 9-5-9-5-9 5 9 5Zm0 0 6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14Zm-4 6v-7.5l4-2.222"
            stroke={props.color || "#22C55E"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default GraduationSvg;
