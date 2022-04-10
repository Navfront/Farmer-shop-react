import React from "react";
import "./style.css";

const TextBlock = ({ className = "", children = "text" }) => {
  let classes = "text";
  if (className && className.includes("text--small")) {
    return <span className={className ? classes + " " + className : classes}>{children}</span>;
  }
  return <p className={className ? classes + " " + className : classes}>{children}</p>;
};

export default TextBlock;
