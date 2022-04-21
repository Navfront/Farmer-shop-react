import StyledButton from "./styled";

const Button = ({ children, width, disabled }) => {
  return (
    <StyledButton width={width} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
