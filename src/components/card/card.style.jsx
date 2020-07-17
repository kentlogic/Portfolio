import styled from "styled-components";
import { device } from "../../utils/media-queries.util";

export const CardContainer = styled.div`
  padding: 1em;
  margin: 0.5em;
  background-color: #f1f1f1;
  box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  padding: 0.5em;
  background: orange;

  @media ${device.custom} {
    font-size: 1.8em;
    background: green;
  }

  @media ${device.mobile} {
    font-size: 2em;
  }

  @media ${device.tablet} {
    font-size: 2em;
  }
  @media ${device.desktop} {/
    font-size: 3.5em;
  }

  @media ${device.desktopL} {
    font-size: 4.5em;
  }
`;

export const CardContent = styled.p`
  font-family: "Roboto", sans-serif;
  text-align: justify;
  text-indent: 1.5em;
  padding: 0.5em;
  background: green;

 @media ${device.custom} {
    font-size: 1.4em;
    background: green;
  }

  @media ${device.mobile} {
    font-size: 2em;
  }

  @media ${device.tablet} {
    font-size: 2em;
  }
  @media ${device.desktop} {/
    font-size: 2em;
  }

  @media ${device.desktopL} {
    font-size: 3em;
  }
`;
