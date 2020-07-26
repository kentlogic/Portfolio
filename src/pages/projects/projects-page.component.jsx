import React from "react";
import Card from "../../components/card/card.component";
import { Container } from "./projects-page.styles";
import ImageLink from "../../components/image-link/image-link.component";
const ProjectsPage = () => (
  <Container>
    <Card
      imgUrl={"./images/Logo.png"}
      title={"title"}
      subtitle={"subtitle"}
      body={
        "Search for the keywords to learn more about each warning To ignore, add  eslint-disable-next-line to the line before"
      }
      footer={""}
    />
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
      <ImageLink src={"./images/discord24.svg"} url={"https://github.com"}>
        View Live
      </ImageLink>
    </Card>
  </Container>
);

export default ProjectsPage;
