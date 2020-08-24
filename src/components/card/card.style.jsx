import styled, { css } from "styled-components";
import { device } from "../../utils/media-queries.util";

export const Container = styled.div`
  background-color: #fff;
  // max-width: 344px;
  max-width: 17rem;
  box-shadow: 0 5px 25px -10px #c2c2c2;
  // box-shadow: 0px 0px 3px #1e1e1e;
  border-radius: 20px;
  margin: 1.5rem;
  color: #353535;
  display: flex;
  flex-direction: column;
  elevation: 90deg;

  @media ${device.mobile} {
    max-width: 20rem;
  }

  @media ${device.custom} {
    max-width: 20rem;
  }
`;

export const CardStyles = css`
  &:hover {
    transition: 0.3s ease;
    box-shadow: 0 7px 30px -10px #c2c2c2;
  }
`;

export const CardContainer = styled(Container)`
  ${CardStyles}
`;

export const CardMedia = styled.div`
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  text-align: center;
  border: none;
  background-size: auto;

  & img {
    border-top-left-radius: 0.4em;
    border-top-right-radius: 0.4em;
    width: 100%;
  }
`;

export const CardHeader = styled.div`
  padding-top: 1.5em;
  padding-top: 1em;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #353535;
  height: auto;
`;

export const CardSubtitle = styled.div`
  color: #353535;
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.6;
  margin-top: 0.5em;
`;

export const CardBody = styled.div`
  padding-top: 0.8em;
  padding-left: 1.25em;
  font-size: 14px;
  line-height: 1.5em;
  color: #353535;
  //  color: #e0e0e0;
  padding-right: 1.5em;
  padding-bottom: 0.5em;
  box-sizing: border-box;
`;

export const CardFooter = styled.footer`
  padding: 0.5em;
  display: flex;
  box-sizing: border-box;
  min-height: 1em;
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
`;
