import React from "react";
import { LogoText, StyledLogo } from "./styled";
import { ReactComponent as LogoIcon } from "../../../assets/logo.svg";
import Link from "../link/link";
import { useLocation } from "react-router-dom";

const Logo = ({ src, iconWidth = 36, iconHeigth = 44, alt = "Logo", children }) => {
  let { pathname } = useLocation();

  return (
    <Link to={pathname === "/" ? false : "/"}>
      <StyledLogo>
        <LogoIcon width={iconWidth} height={iconHeigth} src={src} alt={alt} />
        <LogoText>{children}</LogoText>
      </StyledLogo>
    </Link>
  );
};

export default Logo;
