import styled, { css } from "styled-components";
// import { device } from "../../utils/media-queries.util";

export const Container = styled.div`
  background-color: #fff;
  max-width: 344px;
  height: auto;
  // box-shadow: 0 4px 8px 0 rgba(130, 138, 145, 0.5);
  border-radius: 0.5em;
  margin: 1.5rem;
  color: #222;
  display: flex;
  flex-direction: column;
`;

export const CardStyles = css`
  &:hover {
    transition: 0.7s ease;
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 255);
  }
`;

export const CardContainer = styled(Container)`
  ${CardStyles}
`;

export const CardMedia = styled.div`
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  text-align: center;
  background: #ccc;
  box-sizing: border-box;
  background-size: auto;

  & img {
    width: 100%;
    height: auto;
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
`;

export const CardSubtitle = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.6;
`;

export const CardBody = styled.div`
  padding-top: 0.8em;
  padding-left: 1.25em;
  font-size: 14px;
  line-height: 1.5em;
  color: gray;
  padding-right: 1.5em;
  padding-bottom: 0.5em;
  box-sizing: border-box;
`;

export const CardFooter = styled.div`
  padding: 0.5em;
  display: flex;
  box-sizing: border-box;
  min-height: 1em;
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
`;
