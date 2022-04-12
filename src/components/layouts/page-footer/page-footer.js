import React from "react";
import Logo from "../../ui/logo/logo";
import StyledPageFooter from "./styled";
import LayoutWrapper from "../container/layout-wrapper.js";
import Copyright from "../../ui/copyright/copyright";

const PageFooter = () => {
  return (
    <StyledPageFooter>
      <LayoutWrapper isFooter="true">
        <Logo src="./images/icons/Logo.svg">Фермерские продукты</Logo>
        <Copyright>Создано 2022 by Navfront</Copyright>
      </LayoutWrapper>
    </StyledPageFooter>
  );
};

export default PageFooter;
