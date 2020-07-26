import React from "react";
// import Card from "../../components/card/card.component";
// import CustomButton from "../../components/custom-button/custom-button.component";
import {
  MainContainer,
  ContentContainer,
  MediaContainer,
  HeaderContainer,
  Title,
  Subtitle,
  BodyContainer,
  NameIntro,
  FooterContainer,
} from "./profile-page.style";

class AboutPage extends React.Component {
  render() {
    return (
      <MainContainer>
        <MediaContainer>
          <img src="./images/kentlogic-logo.svg" alt="213" />
        </MediaContainer>
        <ContentContainer>
          <HeaderContainer>
            <Title>About me</Title>
            <Subtitle>IT Support turned software developer</Subtitle>
          </HeaderContainer>
          <BodyContainer>
            <NameIntro>Hi, I'm Vincent.</NameIntro>
            <p>
              I started out as a Cloud Security Engineer. On my first year, I
              was fortunate to be chosen as the{" "}
              <strong>Android developer</strong> of an internal app for our
              department.
            </p>
            <p>
              Building web and mobile apps that help people in their daily life
              gives me a sense of fullfilment.
            </p>
          </BodyContainer>
          <FooterContainer></FooterContainer>
        </ContentContainer>
      </MainContainer>
    );
  }
}

export default AboutPage;
