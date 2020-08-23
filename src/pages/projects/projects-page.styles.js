import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: auto;
  flex-direction: column;
`;

export const ProjHeader = styled.div`
  margin-top: 0.7em;
  padding: 0.5em;
  font-size: 3em;
  line-height: 1.25rem;
  font-weight: 400;
  opacity: 0.6;
  color: #313131;
`;

export const ProjContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: space-between;
  height: auto;
  margin-bottom: 1rem;
  flex-grow: 4;
`;
