import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html, body {
    margin: 0;
    height: 100%;
   
}

#root{
  display: contents;
}

body{
min-width:${({ theme }) => theme.pageWidth + 30 + "px"};
font-family: ${({ theme }) => theme.fontFamily};
font-weight: ${({ theme }) => theme.fontWeigth};
font-size: ${({ theme }) => theme.fontSize};;
}

img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
`;

export default GlobalStyles;
