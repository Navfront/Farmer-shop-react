import React from "react";
import Button from "../../ui/button/button";
import Logo from "../../ui/logo/logo";
import Container from "../container/container";
import { PageHeaderLayout, StyledPageHeader } from "./styled";

const PageHeader = () => {
  return (
    <StyledPageHeader>
      <Container>
        <PageHeaderLayout>
          <Logo>Фермерские продукты</Logo>
          <Button>Купить</Button>
        </PageHeaderLayout>
      </Container>
    </StyledPageHeader>
  );
};

export default PageHeader;
