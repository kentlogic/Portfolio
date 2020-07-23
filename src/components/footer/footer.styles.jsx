import styled from "styled-components";
// import { device } from "../../utils/media-queries.util";

export const FooterContainer = styled.footer`
  background: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 1em;
`;

export const FooterIcons = styled.div`
  & img {
    padding: 0.5em;
    max-width: 100%;
  }
`;

export const FooterNote = styled.p`
  font-size: 0.7rem;
  text-align: center;
`;
