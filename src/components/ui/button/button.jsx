import React from "react";
import "./style.css";

const Button = ({ className = "", href = "", children }) => {
  const classes = "button " + className;
  if (!href) {
    return (
      <button className={classes} type="button">
        {children}
      </button>
    );
  } else {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }
};

export default Button;
