import styled from "@emotion/styled";
import { bgColors, textColors } from "styles/theme";

export const Content = styled.div``;
export const MainContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;

  .sidebarContainer {
    width: 264px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${bgColors.white};
    color: ${textColors.dark};

    .scrollHide {
      ::-webkit-scrollbar {
        width: 0; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
      }
      /* Optional: show position indicator in red */
      ::-webkit-scrollbar-thumb {
        background: transparent;
      }
    }
  }

  .mainBlock {
    width: calc(100vw - 264px);
    left: 264px;
    position: relative;
    background-color: ${bgColors.white};

    .childContent {
      background-color: ${bgColors.grayWild};
      min-height: 100vh;
      position: relative;
      padding-bottom: 100px;
    }
  }
`;
