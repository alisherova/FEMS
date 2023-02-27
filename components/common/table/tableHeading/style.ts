import styled from "@emotion/styled";
import { textColors } from "styles/theme";

export const Heading = styled.p<{ padding: boolean }>`
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.01em;
  color: ${textColors.secondary};
  text-align: center;
  padding: ${(props) => (props.padding ? "16px" : 0)} 0;
  min-width: auto;
`;
