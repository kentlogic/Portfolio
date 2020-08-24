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
import Snackbar from "../../components/snackbar/snackbar.component";
import { connect } from "react-redux";
import { sendMessage } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    messagePending: state.sendMessage.messagePending,
    messageResult: state.sendMessage.messageResult,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: (body) => {
      dispatch(sendMessage(body));
    },
  };
};

class ContactPage extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, subject, message } = event.target;

    const body = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    this.props.onSendMessage(body);

    setTimeout(() => {
      this.props.onSendMessage();
    }, 5000);
  };

  render() {
    const { messagePending, messageResult } = this.props;
    return messagePending ? (
      <div>
        <LoadingComponent />
      </div>
    ) : (
      <Container>
        <Snackbar message={messageResult} />
        <Header>
          <Title>Get in touch</Title>
          <Subtitle>
            I'm interested in both freelance and job opportunities. You may use
            the form below.
          </Subtitle>
          <FormIcons>
            <ImageLink
              url="https://www.linkedin.com/in/kentlogic/"
              src="./images/linkedin24.svg"
            ></ImageLink>
            <ImageLink
              url="https://twitter.com/vgdais"
              src="./images/twitter24_2.svg"
              width="24"
            ></ImageLink>
            <ImageLink
              url="https://www.messenger.com/t/354110892040686"
              src="./images/messenger24.svg"
            ></ImageLink>
            <ImageLink
              url="mailto:iict.vincent@gmail.com"
              src="./images/mail24.svg"
              width="24"
            ></ImageLink>
          </FormIcons>
        </Header>
        <form onSubmit={this.handleSubmit}>
          <FormContainer>
            <ContactContainer>
              <input
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
                name="subject"
                type="text"
                maxLength="30"
                required
                placeholder="Subject "
              />
              <textarea
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
