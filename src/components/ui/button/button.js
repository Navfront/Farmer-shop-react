import StyledButton, { StyledLink } from "./styled";

const Button = ({ children, width, disabled, to, href, onClick }) => {
  if (to) {
    return (
      <StyledLink width={width} disabled={disabled} to={to}>
        {children}
      </StyledLink>
    );
  } else if (!to && href) {
    return (
      <StyledButton as="a" href={href} width={width} disabled={disabled}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton onClick={onClick} width={width} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
