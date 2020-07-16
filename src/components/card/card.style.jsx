import styled from "styled-components";
import { device } from "../../utils/media-queries.util";

export const CardContainer = styled.div`
  background-color: #fff;
  border: 12px solid red;
  padding: 0.5em;
  margin: 0.5em;
  display: flex;

  @media ${device.mobileS} {
    width: 90vw;
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileM} {
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileL} {
    width: 80vw;
  }

  @media ${device.laptop} {
    display: flex;
    width: 40vw;
  }

  @media ${device.laptopL} {
    width: 40vw;
  }

  @media ${device.desktop} {
    width: 30vw;
  }

  @media ${device.desktopL} {
    width: 20vw;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.2em;
  padding: 2em;
  background: orange;
`;

export const CardContent = styled.p`
  padding: 10px;
  background: green;
  font-size: 0.7em;
`;
