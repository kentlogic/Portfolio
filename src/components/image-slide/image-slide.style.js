import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  scroll-behavior: smooth;
  box-shadow: 0 4px 8px 0 rgba(130, 138, 145, 0.5);
  border-radius: 4px;
`;

export const Images = styled.div`
  border-radius: 4px;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  overflow-x: hide;
  display: flex;
  align-items: center;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(130, 138, 145, 0.5);

  & img {
    margin-right: 15px;
  }
`;

export const Controls = styled.div`
  justify-content: center;
  gap: 1em;
  padding: 1em;
  display: flex;
`;
