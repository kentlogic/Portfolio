import styled from "styled-components";
import { device } from "../../utils/media-queries.util";

export const Container = styled.div`
  background: yellow;
  overflow: auto;
  align-items: center;

  @media ${device.mobileS} {
    justify-content: center;
    flex-direction: column;
  }

  @media ${device.mobileM} {
    justify-content: center;
    flex-direction: column;
  }

  @media ${device.mobileL} {
    justify-content: center;
    flex-direction: column;
  }

  @media ${device.laptop} {
    display: flex;

    justify-content: center;
    flex-direction: row;
  }

  @media ${device.laptopL} {
    display: flex;

    justify-content: center;
    flex-direction: row;
  }
`;
