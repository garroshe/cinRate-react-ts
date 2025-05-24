import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Inter, sans-serif;
    }
    
    html {
        overflow-y: scroll;
    }
    
    body {
        background-color: #243544;
    }

    a,
    a:hover {
        color: #a14de2;
    }

    .test {
        display: none;
    }
    
    .test-active {
        display: block;
    }
`

export const colors = {
  primary: "#a14de2",
  bg: "#1A1A1A",

  text: "#fff"
};