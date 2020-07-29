import React from "react";
// import "./contact.styles.scss";
import {
  Container,
  Header,
  Title,
  Subtitle,
  FormIcons,
  FormContainer,
  Button,
  ContactContainer,
  MessageContainer,
} from "./contact.styles";
import ImageLink from "../../components/image-link/image-link.component";

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
      <FormContainer>
        <ContactContainer>
          <input type="text" maxlength="30" required placeholder="Name" />
          <input type="email" maxlength="30" required placeholder="Email " />
        </ContactContainer>
        <MessageContainer>
          <input type="text" maxlength="30" required placeholder="Subject " />
          <textarea required placeholder="Message"></textarea>
        </MessageContainer>
        <Button>Submit</Button>
      </FormContainer>
    </Container>
  );
};

export default ContactPage;
