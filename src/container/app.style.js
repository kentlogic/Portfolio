import styled from "styled-components";
import { device } from "../utils/media-queries.util";
export const AppContainer = styled.div`
  height: 100vh auto;
  box-sizing: border-box;
`;

export const AppHeader = styled.div`
  height: auto;
  width: 100vw;
  position: fixed;
  top: 0;
`;

export const AppContent = styled.div`
  height: auto;

  @media ${device.custom} {
    background: green;
    margin-top: 4.5vh;
    margin-bottom: 5.5vh;
  }

  @media ${device.mobile} {
    background: yellow;
    margin-top: 5.5vh;
    margin-bottom: 5.5vh;
  }

  @media ${device.tablet} {
    background: blue;
    margin-top: 5.5vh;
    margin-bottom: 5.5vh;
  }

  @media ${device.desktop} {
    background: red;
    margin-top: 5.5.5vh;
    margin-bottom: 5.5vh;
  }

  @media ${device.desktopL} {
    background: violet;
    margin-top: 5.5.5vh;
    margin-bottom: 5.5vh;
  }
`;

export const AppFooter = styled.div`
  max-height: 10vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  background: blue;
`;
