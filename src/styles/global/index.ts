import { createGlobalStyle } from "styled-components";
import PretendardVariable from "../font/PretendardVariable.woff2";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Pretendard";
    src: url(${PretendardVariable});
}

html {
    font-size: 10px;
}
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0;
    background-color: #dddddd;

    font-family: 'Pretendard';
}
a {
    text-decoration: none;
    color: black
}

input, button {
    outline: none;
    border: none;
}

`;
