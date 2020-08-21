import React from "react";
// import "./contact.styles.scss";
import LoadingComponent from "../../components/loading-animation/loading-animation.component";
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

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      submitPending: false,
      successMessage: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, subject, message } = event.target;
    //console.log(event.target.name.value);
    console.log(event);
    console.log(name.value, email.value, subject.value, message.value);
    this.setState({
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
      submitPending: true,
    });
    console.log(this.state);

    setInterval(() => {
      this.setState({ submitPending: false, successMessage: "Submitted" });
    }, 3000);
  };

  handleChange = (event) => {
    // const { value, name } = event.target;
    // this.state({
    //   [name]: value,
    // });
  };

  render() {
    const { submitPending, successMessage } = this.state;
    console.log("submitpending ", submitPending);
    return submitPending ? (
      <div>
        <LoadingComponent />
      </div>
    ) : (
      <Container>
        <Header>
          {successMessage}
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
        <form onSubmit={this.handleSubmit}>
          <FormContainer>
            <ContactContainer>
              <input
                onChange={this.handleChange}
                type="text"
                maxLength="30"
                required
                placeholder="Name"
                name="name"
              />
              <input
                name="email"
                type="email"
                maxLength="30"
                required
                placeholder="Email "
              />
            </ContactContainer>
            <MessageContainer>
              <input
                onChange={this.handleChange}
                name="subject"
                type="text"
                maxLength="30"
                required
                placeholder="Subject "
              />
              <textarea
                onChange={this.handleChange}
                required
                name="message"
                placeholder="Message"
              ></textarea>
            </MessageContainer>
            <CustomButton type="submit">Submit</CustomButton>
          </FormContainer>
        </form>
      </Container>
    );
  }
}

export default ContactPage;
