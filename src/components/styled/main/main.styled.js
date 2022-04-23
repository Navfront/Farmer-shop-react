import styled, { css } from "styled-components/macro";

const Main = styled.main`
  margin: 0;
  padding: 0;
  flex: 1;
  background-color: ${({ isProductPage }) => (isProductPage ? "#F7F7F7" : "#FFFFFF")};

  ${({ isProductPage }) => {
    return isProductPage
      ? css`
          overflow-y: scroll;
        `
      : null;
  }}
`;

export default Main;
