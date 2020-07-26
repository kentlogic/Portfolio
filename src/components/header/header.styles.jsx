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

export const NavImgLinkStyles = css`
  padding: 0.3em;
  transition: all 0.3s linear;
  cursor: pointer;
  align-self: center;
  vertical-align: middle;
  & img {
    max-height: 1.5em;
  }

  & img:hover {
    box-shadow: 4px 4px 4px 0 rgba(130, 138, 145, 0.5);
  }
`;

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
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
    font-size: 0.9em;
  }

  @media ${device.mobile} {
    font-size: 1em;
  }
`;

export const NavImgLink = styled(Link)`
  ${NavImgLinkStyles}
`;

export const NavLink = styled(Link)`
  ${NavLinkStyles}
`;
