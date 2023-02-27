import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {bgColors} from "styles/theme";

export const StyledTable = styled.div<{
    divideTableNumber?: number;
    divideRowNumber?: number;
}>`
  width: 100%;
  overflow: scroll;

  table {
    min-width: 700px;

    table.expense-table {
      table-layout: fixed;
    }

    table.expense-table td {
      overflow: hidden;
    }
  }

  ::-webkit-scrollbar {
    display: none;
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ebebeb;
    //-webkit-border-radius: 10px;
    //border-radius: 10px;
    cursor: pointer !important;
  }

  ::-webkit-scrollbar-thumb {
    //-webkit-border-radius: 10px;
    //border-radius: 10px;
    background: #6f767e;
    cursor: pointer !important;
  }

  ${({divideTableNumber}) =>
          divideTableNumber &&
          css`
            td:nth-of-type(${divideTableNumber}) {
                //border-left: 1px solid ${bgColors.slate10};
            }
          `}
  ${({divideRowNumber}) =>
          divideRowNumber &&
          css`
            tr:nth-of-type(${divideRowNumber}) {
              border-bottom: 40px solid ${bgColors.slate50};
            }
          `}
`;
export const SkeletonWrapper = styled.div`
  padding: 10px;
`;
