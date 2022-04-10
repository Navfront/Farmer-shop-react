import React from "react";
import Logo from "../../ui/logo/logo";
import "./style.css";

const PageFooter = () => {
  return (
    <footer className="page__footer page-footer container">
      <Logo />
      <div className="page-footer__copyright">
        <span>Создано 2021</span>
      </div>
    </footer>
  );
};

export default PageFooter;
