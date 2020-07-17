import styled from "styled-components";
import { device } from "../../utils/media-queries.util";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  grid-gap: 20px;
  width:100%;
  overflow: hidden;


  @media ${device.custom} {
    font-size: .5em;
    background: green;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
  @media ${device.desktop} {/
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.desktopL} {
    grid-template-columns: 1fr 1fr;
  }
`;
