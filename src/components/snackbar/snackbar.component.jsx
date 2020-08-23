import React from "react";
import { Container } from "./snackbar.styles";

const Snackbar = ({ message }) => {
  return message ? (
    <Container>
      <img
        alt="check-circle"
        height="25"
        width="25"
        src="./images/check-circle.svg"
      />
      {message}
    </Container>
  ) : (
    <div></div>
  );
};

export default Snackbar;
