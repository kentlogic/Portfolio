import React from "react";
// import "./contact.styles.scss";
import {
  Container,
  Header,
  Title,
  Subtitle,
  FormIcons,
  FormContainer,
  ContactContainer,
  MessageContainer,
} from "./contact.styles";
import ImageLink from "../../components/image-link/image-link.component";
import CustomButton from "../../components/custom-button/custom-button.component";
const ContactPage = () => {
  return (
    <Container>
      <Header>
        <Title>Get in touch</Title>
        <Subtitle>
          I'm interested in both freelance and job opportunities. If you have
          questions, message me through the links or use the form below.
        </Subtitle>
        <FormIcons>
          {" "}
          <ImageLink
            url="http://linkedin.com"
            src="./images/linkedin24.svg"
          ></ImageLink>
          <ImageLink src="./images/twitter24_2.svg" width="24"></ImageLink>
          <ImageLink src="./images/messenger24.svg"></ImageLink>
          <ImageLink src="./images/mail24.svg" width="24"></ImageLink>
        </FormIcons>
      </Header>
      <form action="">
        <FormContainer>
          <ContactContainer>
            <input type="text" maxLength="30" required placeholder="Name" />
            <input type="email" maxLength="30" required placeholder="Email " />
          </ContactContainer>
          <MessageContainer>
            <input type="text" maxLength="30" required placeholder="Subject " />
            <textarea required placeholder="Message"></textarea>
          </MessageContainer>
          <CustomButton>Submit</CustomButton>
        </FormContainer>
      </form>
    </Container>
  );
};

export default ContactPage;
