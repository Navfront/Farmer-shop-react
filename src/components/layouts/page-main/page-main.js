import React from "react";
import { Main } from "../../styled/index";
import { useLocation } from "react-router-dom";

const PageMain = ({ children }) => {
  const { pathname } = useLocation();
  return <Main isProductPage={pathname === "/order" ? true : false}>{children}</Main>;
};

export default PageMain;
