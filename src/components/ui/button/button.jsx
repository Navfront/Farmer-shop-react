import styled from "styled-components";
import { ElementButton } from "../../elements";

const Button = styled(ElementButton)`
  box-sizing: border-box;
  border: none;
  padding: 16.5px 24px;
  width: 260px;
  color: var(--c-white);
  background-color: var(--c-orange);
  font-weight: 700;
  font-size: 18px;
  font-family: inherit;

  &:hover,
  &:focus {
    background-color: var(--c-red);
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    background-color: var(--c-red);
  }
`;

export default Button;
