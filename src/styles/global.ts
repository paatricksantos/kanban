import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  body {
    font-size: 16px;
  }
  button{
    cursor: pointer;
  }
`;
