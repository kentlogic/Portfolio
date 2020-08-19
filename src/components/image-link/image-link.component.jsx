import React from "react";
import {
  MainContainer,
  LinkContainer,
  ImageContainer,
  TextContainer,
} from "./image-link.style";

const ImageLink = ({ url, src, alt, children, ...props }) => (
  <MainContainer>
    <LinkContainer href={url} target="_blank">
      <ImageContainer>
        <img src={src} alt={alt} {...props} />
      </ImageContainer>
      {/*to prevent extra space on the right of the icon when hovering, provide an empty div if there are no children */}
      {children ? <TextContainer>{children}</TextContainer> : <div></div>}
    </LinkContainer>
  </MainContainer>
);

export default ImageLink;
