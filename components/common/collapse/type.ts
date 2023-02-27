import {ReactElement, ReactNode} from "react";

export interface ITab {
    children: ReactNode | ReactElement;
    header: ReactNode | ReactElement;
    getExtra: () => ReactElement | ReactNode;
}

export interface ICollapse {
    onChange?: (key: string | string[]) => void,
    tabsList?: ITab[],
    bordered?: boolean,
    positionExpand?: "end" | "start",
    activeKeys?: string[]
}