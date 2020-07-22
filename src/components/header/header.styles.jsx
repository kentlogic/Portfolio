import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
// import { device } from "../../utils/media-queries.util";

export const NavLinkStyles = css`
  padding: 0.5em;
  transition: all 0.3s linear;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    color: #222;
  }
`;

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #222;
  padding: 1em;
  & a {
    color: #fff;
  }
`;

export const NavItems = styled.div`
  font-size: 1.1rem;

  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 0px;
`;

export const NavItemRight = styled.div`
  margin-left: 0 auto;
`;

export const NavLink = styled(Link)`
  ${NavLinkStyles}
`;
