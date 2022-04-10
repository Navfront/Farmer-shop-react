import React from "react";
import "./style.css";

const Heading = ({ level = "", className = "", children }) => {
  let headingLevel = 2;
  if (level && level < 7 && level > 0) {
    headingLevel = level;
  }
  const HeadingTag = `h${headingLevel}`;
  return <HeadingTag className={className ? "heading " + className : "heading"}>{children}</HeadingTag>;
};

export default Heading;
