import styled from "styled-components";
import { device } from "../../utils/media-queries.util";

export const Container = styled.div`
  align-items: center;
  height: auto;
  overflow: auto;
  padding: 1em;
  margin-top: 1em;
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  color: #fff;

  @media ${device.custom} {
    width: 80vw;
  }

  @media ${device.mobile} {
    width: 80vw;
  }

  @media ${device.tablet} {
    width: 80vw;
  }

  @media ${device.desktop} {
    margin-top: 2em;
    width: 30vw;
  }
  @media ${device.desktopL} {
    margin-top: 2em;
    width: 30vw;
  }
`;

export const Title = styled.div`
  font-size: 2em;
  line-height: 2rem;
  font-weight: 600;
`;

export const Subtitle = styled.div`
  padding-top: 0.5em;
  padding-bottom: 1em;
  font-size: 1em;
  line-height: 1.25rem;
  font-weight: 400;
  opacity: 0.6;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 1s ease;

  @media ${device.custom} {
    font-size: 1em;
    width: 80vw;
  }

  @media ${device.mobile} {
    width: 80vw;
  }

  @media ${device.tablet} {
    width: 80vw;
  }

  @media ${device.desktop} {
    font-size: 1.1em;
    width: 30vw;
  }
  @media ${device.desktopL} {
    font-size: 1.1em;
    width: 30vw;
  }

  & input {
    color: #fff;
    margin: 8px 0;
    outline: none;
    font-size: 0.9em;
    padding: 15px 10px;
    background: #2b2b2b;
    border: none;
  }

  & input:focus {
    border-bottom: 1px solid #0fa;
  }
`;

export const FormIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ContactContainer = styled.div`
  display: flex;
  gap: 0.5em;
  overflow: hide;

  & input {
    width: 100%;
  }
`;

export const MessageContainer = styled.div`
  display: inline-flex;
  flex-direction: column;

  & textarea {
    color: #fff;
    font-size: 0.9em;
    outline: none;
    height: 200px;
    margin: 8px 0;
    padding: 15px 10px;
    background: #2b2b2b;
    border: none;
  }
  & textarea:focus {
    transition: 0.5s;
    border-bottom: 1px solid #0fa;
  }
`;

export const Button = styled.button`
  background: #2b2b2b;
  text-transform: uppercase;
  font-weight: 500;
  align-items: center;
  margin-top: 0.5em;
  padding: 0.7em;
  color: #fff;
  width: 100px;
  border: none;
  outline: none;
  text-align: center;
  outline: none;
  cursor: pointer;
`;
