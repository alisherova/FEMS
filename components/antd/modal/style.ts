import styled from "@emotion/styled";
import Modal from "antd/lib/modal";

export const StyledModal = styled(Modal)<{ padding: string }>`
  .ant-modal-content {
    padding: ${(props) => props.padding};
  }
`;
