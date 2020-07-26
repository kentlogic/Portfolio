import React from "react";
// import CustomButton from "../custom-button/custom-button.component";
import {
  CardContainer,
  CardTitle,
  CardSubtitle,
  CardHeader,
  CardMedia,
  CardBody,
  CardFooter,
} from "./card.style";

const Card = ({ imgUrl, title, subtitle, body, children }) => (
  <CardContainer>
    <CardMedia>{<img src={imgUrl} alt="ing" />}</CardMedia>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
    </CardHeader>
    <CardBody>{body}</CardBody>
    <CardFooter>{children}</CardFooter>
  </CardContainer>
);

export default Card;
