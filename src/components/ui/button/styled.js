import styled from "styled-components";
import { DefaultButton } from "../../styled/index";

const StyledButton = styled(DefaultButton)`
  box-sizing: border-box;
  border: none;
  padding: 16.5px 24px;
  width: 260px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHover};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHover};
  }
`;

export default StyledButton;
