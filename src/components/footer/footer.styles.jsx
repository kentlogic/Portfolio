import styled from "styled-components";
import { device } from "../../utils/media-queries.util";

export const FooterContainer = styled.div`
  height: 5vh;
  width: 100%;
  display: flex;
  padding: 0.2em;
  justify-content: space-between;

  & a {
    color: #fff;
  }

  @media ${device.custom} {
    font-size: .5em;
    background: green;
  }

  @media ${device.mobile} {
    font-size: 0.7em;
    background: yellow;
  }

  @media ${device.tablet} {
    font-size: .9em;
    background: blue;
  }
  @media ${device.desktop} {/
    font-size: 1em;
    background: red;
  }

  @media ${device.desktopL} {
    font-size: 1.2em;
    background: violet;
  }
`;

export const FooterNote = styled.h3`
  color: #fff;

  height: 8vh;
  width: 100%;
  display: flex;
  padding: 0.2em;
  justify-content: space-between;

  & a {
    color: #fff;
  }

  @media ${device.custom} {
    font-size: .5em;
    background: green;
  }

  @media ${device.mobile} {
    font-size: 0.7em;
    background: yellow;
  }

  @media ${device.tablet} {
    font-size: .9em;
    background: blue;
  }
  @media ${device.desktop} {/
    font-size: 1em;
    background: red;
  }

  @media ${device.desktopL} {
    font-size: 1.2em;
    background: violet;
  }
`;
