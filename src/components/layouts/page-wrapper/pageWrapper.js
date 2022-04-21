import styled from "styled-components";

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.index ? "#FFFFFF" : "#F7F7F7;")};
`;

export default PageWrapper;
