import styled from "styled-components";

const DefaultParagraph = styled.p`
  ${(props) => {
    return props.theme.textStyle[props.textStyle];
  }}
`;

export default DefaultParagraph;
