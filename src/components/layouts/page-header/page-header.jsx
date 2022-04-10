import React from "react";
import Button from "../../ui/button/button.jsx";
import Logo from "../../ui/logo/logo.jsx";

import "./style.css";

const PageHeader = () => {
  return (
    <header className="page__header page-header container">
      <Logo />
      <Button>Купить</Button>
    </header>
  );
};

export default PageHeader;
