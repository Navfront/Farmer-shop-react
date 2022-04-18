import React from "react";
import { defaultTheme } from "../../../themes/defaultTheme";
import { DefaultHeading } from "../../styled";

const Heading = ({ children, as, align }) => {
  const HeadingFontSize = {
    h1: defaultTheme.title.h1FontSize,
    h2: defaultTheme.title.h2FontSize,
    h3: defaultTheme.title.h3FontSize,
    h4: defaultTheme.title.h4FontSize,
    h5: defaultTheme.title.h5FontSize || "20px",
    h6: defaultTheme.title.h6FontSize || "18px",
  };

  return (
    <DefaultHeading as={as} fontSize={HeadingFontSize[as]} align={align}>
      {children}
    </DefaultHeading>
  );
};

export default Heading;
