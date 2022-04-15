import styled from "styled-components";

export const StyledAbout = styled.section`
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const AboutWrapper = styled.div`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: right bottom;

  h1 {
    max-width: 550px;
  }

  p {
    max-width: 530px;
  }
`;
