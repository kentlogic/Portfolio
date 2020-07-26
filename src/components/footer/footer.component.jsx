import React from "react";
// import ImageLink from "../image-link/image-link.component";
import { FooterContainer, FooterNote, FooterIcons } from "./footer.styles";
import ImageLink from "../../components/image-link/image-link.component";

const Footer = () => (
  <FooterContainer>
    <FooterIcons>
      <ImageLink
        width="24"
        height="24"
        src={"./images/twitter24_2.svg"}
        url={"https://twitter.com/kent_logic"}
      ></ImageLink>{" "}
      <ImageLink
        width="24"
        height="24"
        src={"./images/discord24.svg"}
        url={"https://discord.com/kentlogic"}
      ></ImageLink>
      <ImageLink
        width="24"
        height="24"
        src={"./images/messenger24.svg"}
        url={"https://messenger.com/kent.logic"}
      ></ImageLink>
      <ImageLink
        width="24"
        height="24"
        src={"./images/linkedin24.svg"}
        url={"https://linkedin.com/vincentdais"}
      ></ImageLink>
    </FooterIcons>
    <FooterNote>
      I want to use Nana, Matches: 1244, Win Rate: 76%. I want to use Nana,
      Matches: 1244, Win Rate: 76%.
    </FooterNote>
  </FooterContainer>
);

export default Footer;
