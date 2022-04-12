import React from "react";
import { LogoText, StyledLogo, LogoIcon } from "./styled";

const Logo = ({ src, iconWidth = 36, iconHeigth = 44, alt = "Logo", children }) => {
  return (
    <StyledLogo>
      <LogoIcon width={iconWidth} height={iconHeigth} src={src} alt={alt} />
      <LogoText>{children}</LogoText>
    </StyledLogo>
  );
};

export default Logo;
