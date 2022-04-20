import styled from "styled-components";

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: ${(props) => (props.index ? "#FFFFFF" : "#F7F7F7;")};
`;

export default PageWrapper;
