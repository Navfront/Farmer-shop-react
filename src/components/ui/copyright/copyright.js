import StyledCopyrightWrapper from "./styled";

const Copyright = ({ children }) => {
  return (
    <StyledCopyrightWrapper>
      <span>{children}</span>
    </StyledCopyrightWrapper>
  );
};

export default Copyright;
