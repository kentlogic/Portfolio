import styled from "styled-components";
// import { device } from "../../utils/media-queries.util";

export const MainContainer = styled.div`
  transition: 1s;

  & :hover {
    background: #cccc;
    border-radius: 7px;
    color: #fff;
  }
`;

export const LinkContainer = styled.a`
  display: flex;
  width: auto;
  justify-items: center;
  align-items: center;
  text-decoration: none;
  font-size: 1em;
  padding: 0.5em;
  color: #1e90ff;

  & :hover {
    background: none;
  }
`;

export const ImageContainer = styled.div`
& :hover {
    background: none;`;

export const TextContainer = styled.div`
  padding-left: 0.3em;
  height: auto;
`;
