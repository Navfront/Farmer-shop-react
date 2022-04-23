import React from "react";
import Button from "../../ui/button/button";
import Logo from "../../ui/logo/logo";
import Container from "../container/container";
import { PageHeaderLayout, StyledPageHeader } from "./styled";
import { useLocation } from "react-router-dom";
import Link from "../../ui/link/link";

const PageHeader = () => {
  const { pathname } = useLocation();
  return (
    <StyledPageHeader>
      <Container>
        <PageHeaderLayout>
          <Logo>Фермерские продукты</Logo>
          {pathname === "/" ? <Button to="/order">Купить</Button> : <Link to="/">Главная</Link>}
        </PageHeaderLayout>
      </Container>
    </StyledPageHeader>
  );
};

export default PageHeader;
