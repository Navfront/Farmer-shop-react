import { StyledLink } from "./styled";

const Link = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default Link;
