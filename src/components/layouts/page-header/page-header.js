import React from "react";
import Button from "../../ui/button/button";
import Logo from "../../ui/logo/logo";
import LayoutWrapper from "../container/layout-wrapper";
import { StyledPageHeader } from "./styled";

const PageHeader = () => {
  return (
    <StyledPageHeader>
      <LayoutWrapper isHeader="true">
        <Logo src="./images/icons/Logo.svg">Фермерские продукты</Logo>
        <Button>Купить</Button>
      </LayoutWrapper>
    </StyledPageHeader>
  );
};

export default PageHeader;
