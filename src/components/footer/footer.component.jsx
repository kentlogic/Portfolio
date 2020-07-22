import React from "react";
// import ImageLink from "../image-link/image-link.component";
import { FooterContainer, FooterNote, FooterIcons } from "./footer.styles";

const Footer = () => (
  <FooterContainer>
    <FooterIcons>
      <img src="./linkedin32.png" alt="" />
      <img src="./mail32.png" alt="" />
      <img src="./github32.png" alt="" />
    </FooterIcons>
    <FooterNote>
      I want to use Nana, Matches: 1244, Win Rate: 76%. I want to use Nana,
      Matches: 1244, Win Rate: 76%.
    </FooterNote>
  </FooterContainer>
);

export default Footer;
