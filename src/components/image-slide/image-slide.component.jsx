import React from "react";
import { Container, Images, Controls } from "./image-slide.style";
import CustomButton from "../custom-button/custom-button.component";
const ImageSlide = () => (
  <Container>
    <Images>
      <img src="./download.svg" alt="" />
    </Images>
    <Controls>
      <CustomButton src={"./left-arrow.svg"}>&#10094;</CustomButton>
      <CustomButton>&#10095;</CustomButton>
    </Controls>
  </Container>
);

export default ImageSlide;
