import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../utils/media-queries.util";

export const NavLinkStyles = css`
  padding: 0.3em;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 1em;
  color: #fff;

  @media ${device.custom} {
    font-size: 0.9em;
  }

  @media ${device.mobile} {
    font-size: 1em;
  }

  @media ${device.desktop} {
    font-size: 1.2em;
  }

  @media ${device.desktopL} {
    font-size: 1.5em;.
  }
  &:hover {
    background-color: #fff;
    color: #222;
  }
`;

export const NavImgLinkStyles = css`
  cursor: pointer;
  display: flex;
  justify-content: center;


  & img {
      border-radius: 2px;
      box-shadow: 0 4px 10px #070509;
      height: auto;
  }

  @media ${device.custom} {
    & img {
      max-height:1.5em;
    }

      @media ${device.mobile} {
    & img {
      max-height: 1.5em;
    }

      @media ${device.tablet} {
    & img {
      max-height: 1.5em;
    }

    @media ${device.desktop} {
    & img {
      max-height: 2em;
    }

    @media ${device.desktopL} {
    & img {
      max-height: 2em;
    }
  }

  & img:hover {
    box-shadow: 0 4px 10px #222;
   }
`;

export const HeaderContainer = styled.nav`
  display: flex;
  padding: 1em;
  justify-content: space-around;
  align-items: center;
`;

export const NavIcon = styled.div`
  max-height: 2em;
  flex: 1 2 auto;
  justify-content: center;
`;

export const NavLinks = styled.div`
  display: flex;
  width: auto;
  align-items: right;
  flex: 1 2 auto;
  justify-content: center;
`;

export const NavImgLink = styled(Link)`
  ${NavImgLinkStyles}
`;

export const NavLink = styled(Link)`
  ${NavLinkStyles}
`;
