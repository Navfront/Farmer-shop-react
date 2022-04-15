import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledPageFooter, PageFooterLayout } from "./styled";
import Copyright from "../../ui/copyright/copyright";
import Container from "../container/container";

const PageFooter = () => {
  return (
    <StyledPageFooter>
      <Container>
        <PageFooterLayout>
          <Logo>Фермерские продукты</Logo>
          <Copyright>Создано 2022 by Navfront</Copyright>
        </PageFooterLayout>
      </Container>
    </StyledPageFooter>
  );
};

export default PageFooter;
