import styled, { css } from "styled-components";
import { DefaultButton } from "../../styled/index";
import { Link } from "react-router-dom";

const buttonCss = css`
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 16.5px 24px;
  width: ${({ width }) => {
    return width ? width : "260px";
  }};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  font-weight: bold;
  font-size: inherit;
  font-family: inherit;
  box-sizing: border-box;

  &[disabled] {
    cursor: default;
    background-color: grey;
    opacity: 0.5;
  }

  &:not(&[disabled]):hover,
  &:not(&[disabled]):focus {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHover};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:not(&[disabled]):active {
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHover};
  }
`;

export const StyledLink = styled(Link)`
  ${buttonCss}
`;

const StyledButton = styled(DefaultButton)`
  border: none;
  ${buttonCss}
`;

export default StyledButton;
