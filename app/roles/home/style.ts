import styled from "@emotion/styled";
import {bgColors} from "styles/theme";

export const Wrapper = styled.div`
  border-radius: 12px;
  border: 1px solid ${bgColors.slate50};
  margin: 24px;

  table {
    width: 100%;
    table-layout: fixed;
  }

  .ten {
    width: 50%;
  }
`;

export const Header = styled.div`
  width: 200px;
  text-transform: uppercase;
`;