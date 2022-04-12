import React from "react";
import Logo from "../../ui/logo/logo";
import "./style.css";

const PageFooter = () => {
  return (
    <footer className="page__footer page-footer">
      <div className="container page-footer__wrapper">
        <Logo />
        <div className="page-footer__copyright">
          <span>Создано 2021</span>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
