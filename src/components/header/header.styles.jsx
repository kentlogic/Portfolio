import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/media-queries.util";

export const NavLinkStyles = css`
  padding: 10px 15px;
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
  background: #222;
  height: 70px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  & a {
    color: #fff;
  }

  @media ${device.mobileS} {
    /* Top Navigation*/
    font-size: 0.7em;
    margin: 0;
    height: 30px;
  }

  @media ${device.mobileM} {
    /* Top Navigation*/
    font-size: 1em;
    margin: 0;
    height: 40px;
  }

  @media ${device.laptop} {
    /* Top Navigation*/
    font-size: 1em;
    margin: 0;
    height: 50px;
  }

  @media ${device.laptopL} {
    /* Top Navigation*/
    font-size: 1.5em;
    margin: 0;
    height: 70px;
  }

  @media ${device.desktop} {
    font-size: 2em;
    height: 100px;
  }

  @media ${device.desktopL} {
    font-size: 3em;
    height: 120px;
  }
`;

export const NavItems = styled.div`
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
