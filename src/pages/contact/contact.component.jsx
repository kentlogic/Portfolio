import React from "react";
// import "./contact.styles.scss";
import {
  Container,
  Header,
  Title,
  Subtitle,
  FormContainer,
  Button,
} from "./contact.styles";

const ContactPage = () => {
  return (
    <Container>
      <Header>
        <Title>Get in touch</Title>
        <Subtitle>
          I'm open for projects. Feel free to leave a message below and I'll get
          back to you.
        </Subtitle>
      </Header>
      <FormContainer>
        <input type="text" maxlength="30" required placeholder="Name" />
        <input type="email" maxlength="30" required placeholder="Email " />
        <textarea required placeholder="Message"></textarea>
        <Button>Submit</Button>
      </FormContainer>
    </Container>
  );
};

export default ContactPage;
