import { DefaultParagraph, DefaultSpan } from "../../styled";

const TextBlock = ({ tag, children, textStyle = "normal", className }) => {
  switch (tag) {
    case "span":
      return (
        <DefaultSpan className={className} textStyle={textStyle}>
          {children}
        </DefaultSpan>
      );
    default:
      return (
        <DefaultParagraph className={className} textStyle={textStyle}>
          {children}
        </DefaultParagraph>
      );
  }
};

export default TextBlock;
