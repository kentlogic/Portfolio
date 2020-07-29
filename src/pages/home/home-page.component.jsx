import React from "react";
// import "./home.styles.scss";
import Card from "../../components/card/card.component";
import ImageLink from "../../components/image-link/image-link.component";
import {
  Container,
  IntroContainer,
  NameContainer,
  ProfContainer,
  ProjMainContainer,
  ProjHeader,
  ProjListContainer,
} from "./home.styles";

const HomePage = () => {
  return (
    <Container>
      <IntroContainer>
        <NameContainer>
          I'm <strong>Vincent.</strong>
        </NameContainer>
        <ProfContainer>a Software Developer</ProfContainer>
      </IntroContainer>

      <ProjMainContainer>
        <ProjHeader>Latest Works</ProjHeader>
        <ProjListContainer>
          <Card
            imgUrl={"./images/Logo.png"}
            title={"title"}
            subtitle={"subtitle"}
            body={
              "Search for the keywords to learn more about each warning To ignore, add  eslint-disable-next-line to the line before"
            }
          >
            <ImageLink src={"./images/github24.svg"} url={"https://github.com"}>
              View Code
            </ImageLink>
            <ImageLink
              src={"./images/discord24.svg"}
              url={"https://github.com"}
            >
              View Live
            </ImageLink>
          </Card>

          <Card
            imgUrl={"./images/Logo.png"}
            title={"title"}
            subtitle={"subtitle"}
            body={
              "Search for the keywords to learn more about each warning To ignore, add  eslint-disable-next-line to the line before"
            }
          >
            <ImageLink src={"./images/github24.svg"} url={"https://github.com"}>
              View Code
            </ImageLink>
            <ImageLink
              src={"./images/discord24.svg"}
              url={"https://github.com"}
            >
              View Live
            </ImageLink>
          </Card>

          <Card
            imgUrl={"./images/Logo.png"}
            title={"title"}
            subtitle={"subtitle"}
            body={
              "Search for the keywords to learn more about each warning To ignore, add  eslint-disable-next-line to the line before"
            }
          >
            <ImageLink src={"./images/github24.svg"} url={"https://github.com"}>
              View Code
            </ImageLink>
            <ImageLink
              src={"./images/discord24.svg"}
              url={"https://github.com"}
            >
              View Live
            </ImageLink>
          </Card>
        </ProjListContainer>
      </ProjMainContainer>
    </Container>
  );
};

export default HomePage;
