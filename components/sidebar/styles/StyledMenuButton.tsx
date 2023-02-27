import styled, {CSSObject} from "@emotion/styled";
import {menuClasses} from "../utils/utilityClasses";
import {bgColors, textColors} from "styles/theme";

interface StyledMenuButtonProps {
    level: number;
    collapsed?: boolean;
    rtl?: boolean;
    disabled?: boolean;
    active?: boolean;
    rootStyles?: CSSObject;
}

export const StyledMenuButton = styled.a<StyledMenuButtonProps>`
  display: flex;
  align-items: center;
  height: 40px;
  margin: 9px 20px 0 20px;
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
  cursor: pointer;
  padding-left: 10px;
  border-radius: 6px;
  max-width: 240px;

  &:hover {
    background-color: ${bgColors.primary}98;
  }

  &:hover .${menuClasses.label} {
    font-weight: 600;
  }

  ${({disabled}) =>
          disabled &&
          `pointer-events: none;
    cursor: default;
    color:#adadad;`}

  ${({active}) => active && `background-color: ${bgColors.primary}; color: ${textColors.white};`}

  ${({rootStyles}) => rootStyles};
`;
