import styled from "styled-components";

export const StyledContainer = styled.div`
  width: ${({ theme }) => theme.pageWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.pagePaddings};
`;
