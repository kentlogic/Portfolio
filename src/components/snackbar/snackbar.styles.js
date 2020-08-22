import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #3f8bc5;
  overflow: hidden;
  color: #fff;
  font-size: 1rem;
  height: auto;
  width: auto;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  bottom: 2rem;
  right: 2rem;
  animation: fadein 0.5s;

  & img {
    margin-right: 0.4em;
  }
  /* Animations to fade the snackbar in and out */
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;
