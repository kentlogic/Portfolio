import React from "react";
import "./card.styles.scss";
// import CustomButton from "../custom-button/custom-button.component";
import { CardContainer, CardTitle, CardContent } from "./card.style";

const Card = ({ children, title, content }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardContent>{content}</CardContent>
  </CardContainer>
);

export default Card;
