import styled, {CSSObject} from "@emotion/styled";

interface StyledMenuIconProps {
    rtl?: boolean;
    rootStyles?: CSSObject;
}

export const StyledMenuIcon = styled.span<StyledMenuIconProps>`
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;

  ${({rootStyles}) => rootStyles};
`;
