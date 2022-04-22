import styled from "styled-components/macro";

const Main = styled.main`
  margin: 0;
  padding: 0;
  flex: 1;
  background-color: ${(props) => (props.index ? "#FFFFFF" : "#F7F7F7;")};
  overflow: hidden;
`;

export default Main;
