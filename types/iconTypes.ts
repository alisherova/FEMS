import React from "react";

export interface TIcon {
    size: "medium" | "small";
    clicked?: { [key: string]: boolean };
    setClicked?: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
    label?: string | React.ReactNode;
    onClick?: () => void;
    defaultValue?: boolean;
    onChange?: (e: any) => void;
    isOpen?: boolean;
}

export interface IIconProps {
    isActive?: boolean;
    style?: any;
    width?: number | string;
    height?: number | string;
    color?: string;
    bgColor?: string;
    onClick?: () => void;
}
