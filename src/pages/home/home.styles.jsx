import styled, { css } from "styled-components";
import { device } from "../../utils/media-queries.util";

export const Container = styled.div`
  height: auto;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

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
`;

export const IntroContainer = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const NameStyles = css`
  color: #fff;
  font-family: "Mosk";
  font-style: normal;
  src: local("Mosk"), url("../../fonts/Mosk.ttf") format("truetype"); /* Safari, Android, iOS */

  @media ${device.custom} {
    font-size: 3rem;
  }

  @media ${device.mobile} {
    font-size: 3rem;
  }

  @media ${device.tablet} {
    font-size: 3rem;
  }

  @media ${device.desktop} {
    font-size: 5rem;
  }

  @media ${device.desktopL} {
    font-size: 5rem;
  }
`;

export const NameContainer = styled.div`
  ${NameStyles};
`;

export const ProfStyles = css`
  font-size: 5rem;
  font-family: "Think Music";
  font-style: normal;
  src: local("Think Music"),
    url("../../fonts/think_music.ttf") format("truetype"); /* Safari, Android, iOS */
  color: #1c8bc5;
  @media ${device.custom} {
    font-size: 3rem;
  }

  @media ${device.mobile} {
    font-size: 3rem;
  }

  @media ${device.tablet} {
    font-size: 3rem;
  }

  @media ${device.desktop} {
    font-size: 5rem;
  }

  @media ${device.desktopL} {
    font-size: 5rem;
  }
`;

export const ProfContainer = styled.div`
  ${ProfStyles}
`;

export const ProjMainContainer = styled.div`
  padding: 1rem;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProjHeader = styled.div`
  padding-left: 1rem;
  line-height: 1.25rrem;
  font-weight: 400;
  opacity: 0.8;
  color: #ffffff;

  @media ${device.custom} {
    font-size: 2rem;
  }

  @media ${device.mobile} {
    font-size: 2rem;
  }

  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  @media ${device.desktop} {
    font-size: 2rem;
  }

  @media ${device.desktopL} {
    font-size: 2rem;
  }
`;

export const ProjListContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-itrems: center;
  flex-wrap: wrap;
`;
