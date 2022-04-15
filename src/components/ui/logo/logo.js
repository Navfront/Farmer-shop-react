import React from "react";
import { LogoText, StyledLogo } from "./styled";
import { ReactComponent as LogoIcon } from "../../../assets/logo.svg";

const Logo = ({ src, iconWidth = 36, iconHeigth = 44, alt = "Logo", children }) => {
  return (
    <StyledLogo>
      <LogoIcon width={iconWidth} height={iconHeigth} src={src} alt={alt} />
      <LogoText>{children}</LogoText>
    </StyledLogo>
  );
};

export default Logo;
