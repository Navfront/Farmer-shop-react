import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: ${({ to }) => (to ? "pointer" : "auto")};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
  transition: ease 0.1s;
`;
