import styled from "styled-components";

const DefaultSpan = styled.span`
  ${(props) => {
    return props.theme.textStyle[props.textStyle];
  }}
`;

export default DefaultSpan;
