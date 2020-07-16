import React from "react";
import { ImageContainer } from "./image-link.style";

const ImageLink = ({ imgurl, ...props }) => (
  <ImageContainer {...props}>
    <img src={imgurl} alt="icon" />
  </ImageContainer>
);

export default ImageLink;
