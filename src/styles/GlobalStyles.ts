import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

*{
margin: 0;
padding: 0;
box-sining: border-box;
}

body{
font-family: "Raleway", sans-serif, monospace;
overflow: hidden
}
.App{
text-align: center;
padding: 40px 0;
}
`