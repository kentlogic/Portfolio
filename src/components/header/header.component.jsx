import React from "react";

import {
  HeaderContainer,
  NavIcon,
  NavLinks,
  NavImgLink,
  NavLink,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <NavIcon>
      <NavImgLink to="/">
        <img src="./images/name-logo-dark.svg" alt="" />
      </NavImgLink>
    </NavIcon>
    <NavLinks>
      <NavLink to="/profile">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavLinks>
  </HeaderContainer>
);

export default Header;
