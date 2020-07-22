import React from "react";
import {
  Container,
  IntroText,
  ProjContainer,
  ProjHeader,
  ProjBody,
  // ImagesDiv,
  // ControlsDiv,
  // ArrowBtn,
} from "./home.style";
// import { content_data } from "./home.data";
// import ImageSlide from "../../components/image-slide/image-slide.component";
import Card from "../../components/card/card.component";
const HomePage = () => {
  return (
    <Container>
      <IntroText>Hi, I'm Vincent</IntroText>

      <ProjContainer>
        <ProjHeader>
          <h2>Featured Projects</h2>
        </ProjHeader>
        <ProjBody>
          <Card
            title={"title"}
            subtitle={"subtitle"}
            imgUrl={"./download.svg"}
            body={"Sample content"}
          ></Card>

          <Card
            title={"title"}
            subtitle={"subtitle"}
            imgUrl={"./download.svg"}
            body={"Sample content"}
          ></Card>
        </ProjBody>
      </ProjContainer>
    </Container>
  );
};

export default HomePage;
