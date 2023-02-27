import { CSSProperties } from "react";
import React from "react";
export interface IButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  buttonType?: "regular" | "green";
  text?: string;
  iconUrl?: string;
  style?: CSSProperties | undefined;
  bgColor?: string;
  textColor?: string;
  children?: React.ReactNode;
  ref?: any;
}

export interface IButtonWithIconProps {
  backgroundcolor?: string;
  boxshadow?: string;
}
