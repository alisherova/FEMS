import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import { TMenuItemStyled, TStyledImage } from "./type";
import { bgColors } from "styles/theme";

export const LogoContainer = styled.div`
  padding-top: 40px;
  height: 74px;
`;

export const Divider = styled.div`
  opacity: 0.1;
  border: 0.5px solid #ffffff;
  height: 0;
`;

export const MenuContainer = styled.div`
  padding: 20px 0;
`;

export const MenuItemStyled = styled.div`
  display: flex;
  height: 36px;
  width: ${(props: TMenuItemStyled) => (props.width ? props.width : "180px")};
  border-radius: 6px;
  color: #ffffff;
  transition: 0.3s;
  margin: 9px 20px;
  align-items: center;
  justify-content: space-between;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    opacity: 99%;
    cursor: pointer;
  }

  .title {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  .verticalDivider {
    width: 2px;
    height: 100px;
  }

  &:hover .title {
    font-weight: 600;
    transition: 0.5s;
  }
`;

export const StyledImage = styled(Image)`
  transform: rotate(${(props: TStyledImage) => (!props.open ? "0" : "90deg")});
  margin-right: 13px;
  transition: 0.5s;
`;

export const MenuTextStyled = styled(Typography)`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.01em;
`;
