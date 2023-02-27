import styled from "@emotion/styled";
import Button from "@mui/material/Button";

import { IButtonWithIconProps } from "./type";
import { bgColors, textColors } from "styles/theme";

export const Wrapper = styled.div<{}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ImageWrapper = styled.div<{}>`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextWrapper = styled.div<{}>`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #b1b5c4;
  text-transform: none !important;
`;

export const StyledButtonWithIcon = styled(Button)<IButtonWithIconProps>(
  ({ backgroundcolor: backgroundColor, boxshadow }) => ({
    background: backgroundColor || bgColors.primary,
    cursor: "pointer",
    boxShadow:
      boxshadow ??
      "0px 2px 8px -4px rgba(0, 0, 0, 0.14), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 2px ${(props) => props.bgColor || bgColors.primary}",
    borderRadius: "10px",
    border: 0,
    outline: 0,
    height: "40px",
    display: "flex",
    alignItems: "center",
    padding: "10px",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "20px",
    textTransform: "none",
    color: textColors.dark,
    "&:hover": {
      background: backgroundColor || bgColors.primary,
    },
  })
);