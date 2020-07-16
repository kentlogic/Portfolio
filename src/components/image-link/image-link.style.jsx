import styled from "styled-components";
import { device } from "../../utils/media-queries.util";

export const ImageContainer = styled.a`
  background: #fff;
  border: 2px red solid;
  max-width: 20vw;


  @media ${device.mobileS} {
    img {
      align-items:center
      height: 100%;
      width: 100%;
    }
  }
`;
