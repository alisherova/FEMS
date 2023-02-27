import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { bgColors, fontSizes, textColors } from "styles/theme";
import { Input } from "antd";

const { TextArea }: { TextArea: any } = Input;
export const AsInput = styled(Input)<{ isBoxShadow: boolean }>`
  border: 1px solid ${bgColors.gray20};
  background: ${bgColors.white};
  box-shadow: 0 1px 1px ${bgColors.white};
  border-radius: 12px;
  font-size: 12px;
  text-align: left;
  letter-spacing: -0.01em;
  color: ${textColors.dark};
  outline: none;
  ${({ isBoxShadow }) =>
    !!isBoxShadow
      ? css`
          box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
        `
      : css`
          border-color: unset !important;
        `}
  ::placeholder {
    color: ${textColors.gray20};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${textColors.gray20};
  }

  ::-ms-input-placeholder {
    color: ${textColors.gray20};
  }

  &:focus {
    border-color: ${bgColors.white};
    box-shadow: unset !important;
  }

  &:hover {
    border-color: ${bgColors.primary} !important;
  }
`;
export const AsPassword = styled(Input.Password)`
  padding: 7px;
  background: ${bgColors.white};
  border: 1px solid ${bgColors.slate50};
  box-shadow: 0 1px 1px ${bgColors.slate10};
  border-radius: 12px;
  font-size: 12px;
  text-align: left;
  letter-spacing: -0.01em;
  font-weight: 500;
  outline: none;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05) !important;

  input {
    background: ${bgColors.white} !important;
  }

  ::placeholder {
    color: ${textColors.secondary};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${textColors.secondary};
  }

  ::-ms-input-placeholder {
    color: ${textColors.secondary};
  }

  &:focus {
    border-color: ${bgColors.primary};
  }

  &:hover {
    border-color: ${bgColors.primary} !important;
  }
`;

export const AsTextarea = styled(TextArea)`
  background: ${bgColors.slate10};
  border: 1px solid ${bgColors.slate50};
  box-shadow: 0 1px 1px ${bgColors.slate10};
  border-radius: 12px;
  font-size: 12px;
  text-align: left;
  letter-spacing: -0.01em;
  color: ${textColors.dark};
  font-weight: 500;
  outline: none;
  font-family: Inter, sans-serif !important;
  resize: vertical;
  box-shadow: none !important;

  ::placeholder {
    color: ${textColors.secondary};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${textColors.secondary};
  }

  ::-ms-input-placeholder {
    color: ${textColors.secondary};
  }

  &:focus {
    border-color: ${bgColors.primary};
  }
  &:hover {
    border-color: ${bgColors.primary}!important;
  }
`;

export const Wrapper = styled.div<{
  required: boolean;
  error: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  & input:disabled,
  & textarea:disabled {
    color: black;
  }

  & input,
  .ant-input,
  .ant-input-password {
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 50px #f7f7f7 inset !important; /* Change the color to your own background color */
      -webkit-text-fill-color: ${textColors.dark};
    }

    &:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0 50px #f7f7f7 inset !important; /*your box-shadow*/
      -webkit-text-fill-color: ${textColors.dark};
      -webkit-text-emphasis-style: none !important;
    }
    font-family: Inter, sans-serif !important;
    font-weight: 500;
    color: ${textColors.dark} !important;
    ${({ error }) =>
      !!error &&
      css`
        border-color: ${bgColors.red50} !important;
      `}
  }
`;

export const Label = styled.label<{ required: boolean }>`
  font-size: ${fontSizes.f12};
  line-height: 15px;
  position: relative;
  margin-bottom: 10px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: ${textColors.dark};
`;

export const FileLabel = styled.label<{ required: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(11px);
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  color: var(--ff);
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;
