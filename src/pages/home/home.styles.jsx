import styled from "styled-components";
import { device } from "../../utils/media-queries.util";

export const Container = styled.div`
  align-items: center;
  height: auto;
  overflow: auto;
  padding: 1em;
  margin-top: 1em;
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  color: #fff;

  @media ${device.custom} {
    width: 80vw;
  }

  @media ${device.mobile} {
    width: 80vw;
  }

  @media ${device.tablet} {
    width: 80vw;
  }

  @media ${device.desktop} {
    width: 50vw;
  }
  @media ${device.desktopL} {
    width: 50vw;
  }
`;

export const Title = styled.div`
  font-size: 2em;
  line-height: 2rem;
  font-weight: 600;
`;

export const Subtitle = styled.div`
  padding-top: 0.5em;
  padding-bottom: 1em;
  font-size: 1.2em;
  line-height: 1.25rem;
  font-weight: 400;
  opacity: 0.6;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.custom} {
    font-size: 1em;
    width: 80vw;
  }

  @media ${device.mobile} {
    width: 80vw;
  }

  @media ${device.tablet} {
    width: 80vw;
  }

  @media ${device.desktop} {
    font-size: 1.1em;
    width: 50vw;
  }
  @media ${device.desktopL} {
    font-size: 1.1em;
    width: 50vw;
  }

  & input {
    color: #fff;

    box-sizing: border-box;
    margin: 8px 0;
    transition: 0.5s;
    outline: none;
    font-size: 1em;
    padding: 15px 10px;
    background: #242424;
    border: 1px solid #ccc;
  }

  & input:focus {
    border: 1px solid fff;
    box-shadow: 0 4px 8px 0 rgba(130, 138, 145, 0.5);
  }

  & textarea {
    color: #fff;
    font-size: 1em;
    outline: none;
    height: 200px;
    margin: 8px 0;
    padding: 15px 10px;
    background: #242424;
    border: 1px solid #ccc;
  }
  & textarea:focus {
    transition: 0.5s;
    border: 1px solid #fff;
    box-shadow: 0 4px 8px 0 rgba(130, 138, 145, 0.5);
  }
`;

export const Button = styled.button`
  background: #30475e;
  text-transform: uppercase;
  font-weight: 500;
  align-items: center;
  margin-top: 0.5em;
  padding: 0.5em;
  color: #fff;
  width: 100px;
  border: #fff 1px solid;
  text-align: center;
  outline: none;
`;
