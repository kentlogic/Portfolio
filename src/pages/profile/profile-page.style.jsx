import styled from "styled-components";
import { device } from "../../utils/media-queries.util";

export const MainContainer = styled.div`
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
  color: #fff;
  flex-direction: column;
`;

export const MediaContainer = styled.div`
  height: auto;
  padding: 1em;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & img {
    max-width: 100%;
    height: auto;
  }
`;

export const HeaderContainer = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
`;

export const Title = styled.div`
  font-size: 3em;
  font-weight: bold;
`;

export const Subtitle = styled.div`
  font-size: 1.2em;
  opacity: 0.7;
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
    width: 30vw;
  }
  flex-direction: column;
  & p {
    font-size: 1.5em;
    padding: 0.5em;
  }
`;

export const NameIntro = styled.p`
  // color: #1e90ff;
  // color: #1c8bc5;

  font-weight: bold;
`;
export const FooterContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
