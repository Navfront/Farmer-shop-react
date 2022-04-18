import { css } from "styled-components";
export const defaultTheme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    dark: "#333333",
    grey: "#f6f6f6",
    lightBlue: "#d8ecfe",
    lightGreen: "#e1edce",
    green: "#88aa4d",
    red: "#F75531",
    orange: "#FC9B27",
    pink: "#F8DDD7",
    buttonPrimary: "#FC9B27",
    buttonPrimaryHover: "#FC7427",
    inputDefault: "#F7F7F7",
  },
  fontFamily: '"Inter", "Arial", sans-serif',
  fontWeigth: 400,
  fontSize: "18px",
  pageWidth: "1100px",
  pagePaddings: "0 15px",

  title: {
    lineHeigth: "1.15",
    fontWeigth: "bold",
    h1FontSize: "44px",
    h2FontSize: "36px",
    h3FontSize: "32px",
    h4FontSize: "24px",
  },

  textStyle: {
    normal: css`
      font-size: 18px;
      line-height: 1.5;
      font-weight: 400;
    `,
    normalBold: css`
      font-size: 18px;
      line-height: 1.5;
      font-weight: bold;
    `,
    small: css`
      font-size: 14px;
      line-height: 1.3;
      font-weight: 400;
    `,
    smallBold: css`
      font-size: 14px;
      line-height: 1.3;
      font-weight: bold;
    `,
  },
};
