import React from "react";
import Button from "../../ui/button/button";
import Logo from "../../ui/logo/logo";
import Container from "../container/container";
import { PageHeaderLayout, StyledPageHeader } from "./styled";

const PageHeader = ({ buyButton }) => {
  return (
    <StyledPageHeader>
      <Container>
        <PageHeaderLayout>
          <Logo>Фермерские продукты</Logo>
          {buyButton && <Button>Купить</Button>}
        </PageHeaderLayout>
      </Container>
    </StyledPageHeader>
  );
};

export default PageHeader;
