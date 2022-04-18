import styled from "styled-components";

const DefaultHeading = styled.h2`
  line-height: ${({ theme }) => theme.title.lineHeigth};
  font-weight: ${({ theme }) => theme.title.fontWeigth};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "36px")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "auto")};
  text-align: ${({ align }) => (align ? align : "left")};
`;

export default DefaultHeading;
