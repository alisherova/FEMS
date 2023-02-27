import styled from "@emotion/styled";
import {borders, fontSizes, textColors, bgColors} from "styles/theme";

export const Wrapper = styled.form`
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 340px;
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: #ffffff;
  box-shadow: 0 40px 64px -12px rgba(0, 0, 0, 0.08),
  0 0 14px -4px rgba(0, 0, 0, 0.05), 0px 32px 48px -8px rgba(0, 0, 0, 0.1);
  border-radius: ${borders.b10};
  outline: none !important;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & .vertical {
    flex-direction: column;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;

  .cancel {
    width: 100%;
    height: 44px;
    color: ${textColors.gray40};
    background-color: ${bgColors.white};
    box-shadow: inset 0 2px 6px rgba(252, 252, 253, 0.8);
  }

  .save {
    width: 100%;
    height: 44px;
    color: ${textColors.white};
  }
`;

export const IconWrapper = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-inline: auto;
  position: relative;

  .svg {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .blur {
    position: absolute;
    width: 26px;
    height: 26px;
    left: 50%;
    top: 26px;
    filter: blur(30px);
  }
`;

export const Text = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: ${fontSizes.f12};
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.01em;
  color: ${textColors.dark};
  margin-top: 10px;
`;
