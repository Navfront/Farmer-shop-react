import React from "react";
import "./style.css";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__icon" src="./images/icons/Logo.svg" alt="Logo" width="36" height="44" />
      <span className="logo__text">Фермерские продукты</span>
    </div>
  );
};

export default Logo;
