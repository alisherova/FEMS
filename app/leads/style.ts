import styled from "@emotion/styled";
import {fontSizes, fontWeights, textColors} from "styles/theme";

export const LeadsWrapper = styled.div`
  padding: 24px;
  margin: 0 auto;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

export const Title = styled.div`
  font-size: ${fontSizes.f20};
  font-weight: ${fontWeights.w600};
  margin-bottom: 16px;
  color: ${textColors.dark};
`;

