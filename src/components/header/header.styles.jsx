import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/media-queries.util";

export const NavLinkStyles = css`
  padding: 0.5em;
  transition: all 0.3s linear;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;

  &:hover {
    border-bottom: 2px;
    background-color: #fff;
    color: #222;
  }

  & img {
    max-height: 20px;
  }

  & img:hover {
    background-color: #222;
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
  font-size: 1.5em;
  font-weight: bold;
  height: 100%;
  margin-right: 1em;

  @media ${device.custom} {
    font-size: 1em;
  }

  @media ${device.mobile} {
    font-size: 1em;
  }
`;

export const NavLink = styled(Link)`
  ${NavLinkStyles}
`;
