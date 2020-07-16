import styled from "styled-components";
import { device } from "../../utils/media-queries.util";

export const FooterContainer = styled.div`
  background: #222;
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  display: flex;

  & a {
    color: #fff;
  }

  @media ${device.mobileS} {
    font-size: 0.7em;
    height: auto;
  }

  @media ${device.mobileM} {
    font-size: 1em;
    height: auto;
  }

  @media ${device.laptop} {
    font-size: 1em;
    padding: 5px;
    height: 50px;
  }

  @media ${device.laptopL} {
    font-size: 1em;
    height: auto;
  }

  @media ${device.desktop} {
    font-size: 1.5em;
    padding: 20px;
    height: auto;
  }

  @media ${device.desktopL} {
    font-size: 1em;
    padding: 20px;
    height: auto;
  }
`;

export const FooterNote = styled.h3`
  color: #fff;
  padding: 10px;

  @media ${device.mobileS} {
    font-size: 0.7em;
  }

  @media ${device.mobileM} {
    font-size: 1em;
  }

  @media ${device.laptop} {
    font-size: 1em;
  }

  @media ${device.laptopL} {
    font-size: 1.5em;
  }

  @media ${device.desktop} {
    font-size: 2em;
  }

  @media ${device.desktopL} {
    font-size: 3em;
  }
`;
