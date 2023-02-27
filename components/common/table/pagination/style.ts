import styled from "@emotion/styled";
import {bgColors, fontSizes, textColors} from "styles/theme";

export const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 54px;

  .css-cp01gg-control {
    min-height: unset !important;
  }
`;
export const StyledSelectContainer = styled.div`
  background: ${bgColors.white};
  max-width: 54px;
  box-shadow: 0 40px 64px -12px rgba(0, 0, 0, 0.08),
  0px 0px 14px -4px rgba(0, 0, 0, 0.05), 0px 32px 48px -8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16px);

  border-radius: 8px;
  margin-bottom: 10px;
  position: absolute;
  z-index: 10;
  width: 100%;
  padding: 4px;
  gap: 12px;
  bottom: 24px;

  .item {
    margin-top: 4px;
    height: 27px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    font-weight: 700;
    color: ${textColors.gray20};
    justify-content: center;
  }

  .item__active {
    background-color: ${bgColors.primary};
  }

  .item__active:hover {
    background: ${bgColors.primary} !important;
  }

  .item:first-of-type {
    margin-top: 0 !important;
  }

  .item:hover {
    background: #f4f5f6;
    cursor: pointer;
  }

  font-size: ${fontSizes.f12};
  line-height: 15px;
  font-weight: 700;
`;

export const StyledSelectInputContainer = styled.div<any>`
  width: 100%;
  min-height: 24px;
  max-width: 54px;
  display: flex;
  align-items: center;
  padding: 0 6px;
  background: #f7f7f7;
  /* #E6E8EC */
  font-size: ${fontSizes.f12};
  line-height: 15px;
  font-weight: 700;
  border: 1px solid #e6e8ec;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  cursor: pointer;

  .dropdown__open {
    transform: rotate(90deg);
  }

  .dropdown__close {
    transform: rotate(270deg);
  }

  ${(props) =>
          props.isOpen
                  ? "background: #f7f7f7;" +
                  "border: 1px solid #ffcf00;" +
                  "box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);" +
                  "border-radius: 6px;"
                  : ""}
  ${(props) => (props.value ? "background: #FCFCFD;" : "")}
  .multiselect__item {
    height: 24px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #23262f;
    background: #f4f5f6;
    border-radius: 4px;
    margin-left: 4px;
    margin-top: 4px;
    display: flex;
    align-items: center;
    padding: 0 0 0 8px;
  }

  .multiselect__item:first-of-type {
    margin-left: 0 !important;
  }
`;

export const StyledHelperText = styled.span`
  font-weight: 500 !important;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${textColors.dark};
  margin-bottom: 10px;
`;

export const StyledPaginationWrapper = styled.tr`
  display: table-row;
  vertical-align: middle;
`;

export const StyledPaginationBlock = styled.td`
  display: table-cell;
  vertical-align: inherit;
`;

export const StyledPaginationPerPageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
`;
export const StyledPaginationPerPageBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledPaginationPerPageText = styled.span`
  color: ${textColors.gray40};
  font-weight: 500;
  font-size: ${fontSizes.f12};
  margin-left: 10px;

  &:first-of-type {
    margin-left: 0;
  }
`;

export const StyledPaginationPerPageSelect = styled.div`
  display: flex;
  margin-left: 10px;
  max-width: 54px;
`;

export const StyledPaginationBasicTextBlock = styled.div`
  display: inline-flex;
  padding: 4px 8px 4px 8px;
  color: ${textColors.gray40};
  font-size: ${fontSizes.f12};
  line-height: 16px;
  font-weight: 700;

  .active {
    color: ${textColors.dark};
  }
`;

export const ListItem = styled.li`
  border-radius: 3px;
  width: 24px;
  height: 18px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSizes.f12};
  color: ${textColors.dark};
  cursor: pointer;
  margin-left: 4px;
  font-weight: 700;

  &:first-of-type {
    margin-left: 0;
  }

  &.disabled {
    color: ${textColors.gray20} !important;
    pointer-events: none;
  }

  &:hover {
    background-color: ${bgColors.slate10};
  }

  &.active {
    background-color: ${bgColors.primary};
  }
`;

export const StyledPaginationButtonWrapper = styled.div`
  border: 1px solid ${bgColors.slate50};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  background: ${bgColors.white};
  border-radius: 5px;
  max-height: 26px;
  line-height: 15px;
`;

export const StyledPaginationButtonArrow = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${bgColors.dark};
  height: 100%;
  font-size: ${fontSizes.f12};

  span {
    color: ${bgColors.dark};
    height: 100%;
    padding: 7px 8px;
    line-height: 8px;
  }

  .left {
    border-right: 1px solid ${bgColors.slate10};
  }

  .right {
    border-left: 1px solid ${bgColors.slate10};
  }

  .disabled {
    color: ${bgColors.slate10};
  }
`;
