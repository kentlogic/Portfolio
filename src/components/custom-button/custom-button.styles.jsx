import styled, { css } from "styled-components";
import { device } from "../../utils/media-queries.util";

export const CustomButtonContainer = styled.button`
  letter-spacing: 0.5px;
  border-radius: 5px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  // font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background: #fff;
    color: #222;
  }

  @media ${device.mobileS} {
    background-color: green;

    /* Top Navigation*/
    font-size: 0.3em;
    padding: 5px;

    height: auto;
  }

  @media ${device.mobileM} {
    background-color: blue;
    padding: 7px;

    /* Top Navigation*/
    font-size: 0.5em;
    height: auto;
  }

  @media ${device.laptop} {
    background-color: red;
    /* Top Navigation*/
    font-size: 0.8em;
    padding: 7px;
    height: auto;
  }

  @media ${device.laptopL} {
    background-color: yellow;
    padding: 10px;
    /* Top Navigation*/
    font-size: 1em;
    height: auto;
  }

  @media ${device.desktop} {
    background-color: orange;
    font-size: 1em;
    padding: 20px;
    height: auto;
  }

  @media ${device.desktopL} {
    background-color: pink;

    font-size: 0.8em;
    height: auto;
  }
`;
