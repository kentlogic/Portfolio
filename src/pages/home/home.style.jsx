import styled from "styled-components";
import { device } from "../../utils/media-queries.util";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  align-items: center;
  padding: 0.5em;

  @media ${device.custom} {
    flex-direction: column;
    background: red;
  }

  @media ${device.mobile} {
    flex-direction: column;
    background: red;
  }

  @media ${device.tablet} {
    background: #222;
  }
`;

export const IntroText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  padding: 3rem;
  color: #fff;
`;

export const ProjContainer = styled.div`
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(130, 138, 145, 0.5);
  border-radius: 4px;
  height: auto;
  align-items: center;

  & h2 {
    text-align: left;
    margin: 1rem;
  }

  @media ${device.custom} {
    flex-direction: column;
    background: blue;
  }
`;

export const ProjHeader = styled.div`
  font-size: 1em;
`;

export const ProjBody = styled.div`
  display: flex;

  @media ${device.custom} {
    flex-direction: column;
    background: blue;
  }

  @media ${device.mobile} {
    flex-direction: column;
    background: blue;
  }

  @media ${device.tablet} {
    background: #222;
    flex-direction: row;
  }
`;
