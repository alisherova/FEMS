import { CSSProperties, ReactNode } from "react";
import { ImageWrapper, Wrapper, TextWrapper } from "./style";
import styled from "@emotion/styled";
import { bgColors, fontSizes, textColors } from "styles/theme";
import Image from "next/image";
import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

const StyledButton = React.forwardRef(
  (
    props: {
      disabled?: boolean;
      buttonType?: "regular" | "green";
      type?: "button" | "submit" | "reset";
      text?: string;
      iconUrl?: string;
      style?: CSSProperties | undefined;
      bgColor?: string;
      textColor?: string;
      children?: React.ReactNode;
      onClick?: () => void;
      textStyle?: CSSProperties | undefined;
      icon?: ReactNode;
      className?: any;
      onMouseEnter?: any;
      onMouseLeave?: any;
      args?: any;
      buttonLoading?: boolean;
    },
    ref: React.LegacyRef<HTMLInputElement> | undefined
  ) => {
    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => {
      return {
        color: props.textColor ?? textColors?.dark,
        backgroundColor: props.bgColor ?? bgColors?.primary,
        "&:hover": {
          backgroundColor: props.bgColor ?? bgColors?.primary,
          boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.05)",
          borderRadius: "8px",
        },
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.05)",
        borderRadius: "8px",
        fontSize: fontSizes.f12,
        paddingTop: "10px",
        paddingBottom: "10px",
        lineHeight: "20px",
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        minHeight: "37px",
        fontWeight: 700,
      };
    });
    return (
      <Wrapper style={{ width: props.style?.width ?? "fit-content" }}>
        <ColorButton
          variant="contained"
          disabled={props?.disabled}
          ref={ref}
          type={props.type}
          style={{ textTransform: "none", ...props.style }}
          onClick={props.onClick}
          className={props.className}
          {...props.args}
          onMouseMove={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        >
          {props.icon}
          {!!props.iconUrl && (
            <ImageWrapper>
              <Image
                src={props.iconUrl}
                alt={props.iconUrl}
                width={18}
                height={18}
              />
            </ImageWrapper>
          )}
          {props.buttonLoading && (
            <CircularProgress
              color="inherit"
              size={16}
              style={{ marginRight: "10px" }}
            />
          )}
          {!!props.text && (
            <TextWrapper style={props.textStyle}>{props.text}</TextWrapper>
          )}
          {props.children}
        </ColorButton>
      </Wrapper>
    );
  }
);
// @ts-ignore
export default StyledButton;
// @ts-ignore
