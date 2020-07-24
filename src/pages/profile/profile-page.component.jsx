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
  FooterContainer,
} from "./profile-page.style";

class AboutPage extends React.Component {
  render() {
    return (
      <MainContainer>
        <MediaContainer>
          <img src="./kentlogic.png" alt="213" />
        </MediaContainer>
        <ContentContainer>
          <HeaderContainer>
            <Title>About me</Title>
            <Subtitle>IT Support turned software developer</Subtitle>
          </HeaderContainer>
          <BodyContainer>
            <p>
              I started out as a Cloud Security Engineer and was given the
              opportunity to be the <strong>Android developer</strong> of an
              internal app.
            </p>
            <p>
              While developing the app, I became more interested insoftware
              development which eventually became a habit and a passion.
            </p>
            <p>
              Before switching careers, I joined a startup in order to have a
              feel on how issues are usually addressed by the developers and to
              pick-up best practices in software development.
            </p>
          </BodyContainer>
          <FooterContainer></FooterContainer>
        </ContentContainer>
      </MainContainer>
    );
  }
}

export default AboutPage;
