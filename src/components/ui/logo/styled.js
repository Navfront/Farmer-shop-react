import styled from "styled-components";

export const LogoText = styled.span`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 28px;
  }
`;
