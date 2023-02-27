import styled from "@emotion/styled";
import {Box, Typography} from "@mui/material";
import {bgColors, fontSizes, textColors} from "styles/theme";
import React from "react";
import {SearchSvg} from "components/elements/icons";

export const HeaderContainerBox = styled.div`
  min-height: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 0 0 0 40px;
  position: fixed;
  width: calc(100% - 264px);
  z-index: 1000;
  background-color: ${bgColors.white};
  background-color: ${bgColors.white};

  .username {
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
  }

  .role {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #92929d;
  }
`;

export const HeaderTitle = styled(Typography)`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

export const SearchInputStyled = styled("input")`
  border: 0 !important;
  outline: 0;
  display: flex;
  flex: 1;
  background: ${bgColors.grayWild};
  height: 100%;
  width: 264px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  SearchInputStyledBox ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${textColors.dark};
    opacity: 1; /* Firefox */
  }
`;

const SearchInputStyledBox = styled(Box)`
  width: 240px !important;
  height: 44px !important;
  background-color: ${bgColors.grayWild};
  font-size: ${fontSizes.f14};
  display: flex;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
`;

export const SearchInput = () => {
    return (
        <SearchInputStyledBox>
            <Box sx={{padding: "14px 8px 14px 18px"}}>
                <SearchSvg width={16} height={16} />
            </Box>
            <SearchInputStyled placeholder="Search"/>
        </SearchInputStyledBox>
    );
};
