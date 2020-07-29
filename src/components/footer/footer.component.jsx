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
        url={"https://twitter.com/vgdais"}
      ></ImageLink>{" "}
      <ImageLink
        width="24"
        height="24"
        src={"./images/discord24.svg"}
        url={" https://discordapp.com/users/kentlogic#8354"}
      ></ImageLink>
      <ImageLink
        width="24"
        height="24"
        src={"./images/messenger24.svg"}
        url={"https://www.messenger.com/t/354110892040686"}
      ></ImageLink>
      <ImageLink
        width="24"
        height="24"
        src={"./images/linkedin24.svg"}
        url={"https://www.linkedin.com/in/kentlogic/"}
      ></ImageLink>
    </FooterIcons>
    <FooterNote>
      Vincent Dais Portfolio &#169; {new Date().getFullYear()} | Created with
      React{" "}
    </FooterNote>
  </FooterContainer>
);

export default Footer;
