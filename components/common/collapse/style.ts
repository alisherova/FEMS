import styled from "@emotion/styled";
import {Collapse} from "antd";
import {bgColors} from "styles/theme";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CollapseC = styled(Collapse)`
    border-radius: 12px;
    background: ${bgColors.white};
`;

const {Panel} =  Collapse;

export const PanelC = styled(Panel)`
    padding: 24px 20px;
`;