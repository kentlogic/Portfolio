import React from "react";
// import "./contact.styles.scss";
import {
  Container,
  Header,
  Title,
  Subtitle,
  FormContainer,
  Button,
  ContactContainer,
  MessageContainer,
} from "./contact.styles";

const ContactPage = () => {
  return (
    <Container>
      <Header>
        <Title>Get in touch</Title>
        <Subtitle>
          I'm interested in both freelance and job opportunities. If you have
          questions, feel free to leave a message.
        </Subtitle>
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
