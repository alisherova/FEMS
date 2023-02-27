import styled from "@emotion/styled";
import {bgColors, fontSizes, fontWeights} from "styles/theme";
import {color} from "@mui/system";

export const InfoCardWrapper = styled.div`
  width: 100%;
  border: 1px solid ${bgColors.slate50};
  background: ${bgColors.white};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  gap: 16px;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${bgColors.slate10};
`;

export const TitleSite = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.p`
  font-size: ${fontSizes.f12};
  font-weight: ${fontWeights.w600};
  color: ${color};
`;

export const CountWrapper = styled.p`
  font-size: ${fontSizes.f20};
  font-weight: ${fontWeights.w600};
`;