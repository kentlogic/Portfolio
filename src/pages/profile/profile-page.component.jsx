import React from "react";
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
import LoadingAnimation from "../../components/loading-animation/loading-animation.component.jsx";

class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
    console.log("this should be true: ", this.state.isLoaded);
  }

  render() {
    const { isLoaded } = this.props;
    console.log("this should be true: ", this.props.isLoaded);
    return !isLoaded ? (
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
    ) : (
      <LoadingAnimation />
    );
  }
}

export default AboutPage;
