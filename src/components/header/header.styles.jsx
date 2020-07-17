import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/media-queries.util";

export const NavLinkStyles = css`
  padding: 0 0.5em;
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
  width: 100%;
  display: flex;
  padding: 0.2em;
  justify-content: space-between;

  & a {
    color: #fff;
  }

  @media ${device.custom} {
    font-size: .5em;
    background: green;
  }

  @media ${device.mobile} {
    font-size: 0.7em;
    background: yellow;
  }

  @media ${device.tablet} {
    font-size: .9em;
    background: blue;
  }
  @media ${device.desktop} {/
    font-size: 1em;
    background: red;
  }

  @media ${device.desktopL} {
    font-size: 1.5em;
    background: violet;
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
