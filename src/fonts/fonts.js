import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 
    @font-face {
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 300;
        src: local("Roboto"), url("./roboto.ttf") format("truetype"); /* Safari, Android, iOS */
    }
`;
