import styled from "styled-components";
// import { device } from "../../utils/media-queries.util";

export const CustomButtonContainer = styled.button`
  letter-spacing: 0.5px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1.5em;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(130, 138, 145, 0.5);

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(130, 138, 145, 0.5);

    background: #fff;
  }
`;
