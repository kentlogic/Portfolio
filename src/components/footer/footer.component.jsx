import React from "react";
// import "./footer.styles.scss";
// import ImageLink from "../image-link/image-link.component";
import { FooterContainer, FooterNote } from "./footer.styles";
import icon from "./icon.png";

console.log(icon);

const Footer = () => (
  <FooterContainer>
    <FooterNote>Powered by React</FooterNote>
    {/* <ImageLink
      imgurl="./icon.png"
      href={"https://linkedin.com/vincentdais"}
      rel="noopener noreferrer"
      target="_blank"
    /> */}
    {/* <ImageLink
      imgurl="./linkedin.svg"
      href={"https://linkedin.com/vincentdais"}
      rel="noopener noreferrer"
      target="_blank"
    />
    <ImageLink
      imgurl="./github.svg"
      alt={"github"}
      href={"https://github.com/kentlogic"}
      rel="noopener noreferrer"
      target="_blank"
    />
    <ImageLink
      imgurl="./messenger.svg"
      href={"https://messenger.com/kent.logic"}
      rel="noopener noreferrer"
      target="_blank"
    /> */}
  </FooterContainer>
);

export default Footer;
