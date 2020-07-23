import React from "react";
import "./header.styles.scss";

import { HeaderContainer, NavItems, NavLink } from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <NavItems>
      <NavLink to="/profile">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </NavItems>
  </HeaderContainer>
);

export default Header;
