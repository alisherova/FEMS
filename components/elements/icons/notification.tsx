import * as React from "react";
import {IIconProps} from "types";

const NotificationSvg = (props: IIconProps) => (
    <svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.666 23.83c0-.317.13-.621.358-.842l.857-.828c.327-.315.51-.75.509-1.204l-.008-2.627a6.642 6.642 0 1 1 13.284-.02v2.667c0 .442.176.866.489 1.179l.833.833A1.178 1.178 0 0 1 27.155 25h-3.822a3.333 3.333 0 1 1-6.666 0h-3.83a1.17 1.17 0 0 1-1.17-1.17ZM18.334 25a1.667 1.667 0 1 0 3.334 0h-3.334ZM25 20.976c0 .884.351 1.732.976 2.357h-11.91a3.333 3.333 0 0 0 .99-2.382l-.007-2.627a4.976 4.976 0 1 1 9.95-.015v2.667Z"
            fill="#6F767E"
        />
        <rect x={19.334} y={8.5} width={9} height={9} rx={4.5} fill="#FF6A55" />
        <rect x={19.334} y={8.5} width={9} height={9} rx={4.5} stroke="#FCFCFC" />
    </svg>
);

export default NotificationSvg;
