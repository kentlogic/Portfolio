import React from "react";
import Card from "../../components/card/card.component";
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
        <ProjHeader>What I do</ProjHeader>
        <ProjListContainer>
          <Card
            imgUrl={"./images/web.jpeg"}
            title={"Web Development"}
            subtitle={"React, Node, Django, PostgreSQL"}
            body={
              "I usually go with React for the front-end when building projects with Node and PostgreSQL for the backend."
            }
          ></Card>
          <Card
            imgUrl={"./images/mobile.jpeg"}
            title={"Android Development"}
            subtitle={"Kotlin, Retrofit, Jetpack"}
            body={
              "I started with Java for Android development but later switched to Kotlin. For API calls, I use retrofit and glide for images."
            }
          ></Card>
        </ProjListContainer>
      </ProjMainContainer>
    </Container>
  );
};

export default HomePage;
