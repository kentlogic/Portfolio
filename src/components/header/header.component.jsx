import React from "react";
import "./header.styles.scss";

import {
  HeaderContainer,
  NavItems,
  NavImgLink,
  NavLink,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <NavItems>
      <NavImgLink to="/">
        <img src="./images/name-logo.svg" alt="" />
      </NavImgLink>
      <NavLink to="/profile">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavItems>
  </HeaderContainer>
);

export default Header;
