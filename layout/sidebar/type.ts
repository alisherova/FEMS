import {ReactNode} from "react";

export type TMenuItem = {
    title?: string;
    icon?: ReactNode;
    child?: object[];
    open?: boolean;
};

export type TStyledImage = {
    bool: string;
    open: boolean;
};

export type TMenuItemStyled = {
    width?: string | number;
    open?: boolean;
};
