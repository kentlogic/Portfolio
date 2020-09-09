import styled from "styled-components";
import { device } from "../../utils/media-queries.util";

export const MainContainer = styled.div`
  margin-top: 1rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  animation: 1s ease-in 0s 1 fadein;

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @media ${device.custom} {
    flex-direction: column;
  }

  @media ${device.mobile} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.desktop} {
    flex-direction: column;
  }

  @media ${device.desktopL} {
    flex-direction: row;
  }
`;

export const ContentContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  padding: 1em;
  color: #212121;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
`;

export const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

export const BodyContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  opacity: 0.9;

  @media ${device.custom} {
    font-size: 0.8em;
    width: 80vw;
  }

  @media ${device.mobile} {
    font-size: 0.8em;
    width: 80vw;
  }

  @media ${device.tablet} {
    font-size: 0.9em;
    width: 80vw;
  }

  @media ${device.desktop} {
    font-size: 1.1em;
    width: 80vw;
  }
  @media ${device.desktopL} {
    font-size: 1.1em;
    width: 80vw;
  }
  flex-direction: column;
  & p {
    font-size: 1.5em;
    padding: 0.5em;
  }
`;
export const FooterContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
