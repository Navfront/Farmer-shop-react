import styled from "styled-components";
import { StyledContainer } from "./container";

const LayoutWrapper = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => {
    if (props.isHeader) {
      return "10px 0";
    }
    if (props.isFooter) {
      return "18px 0";
    }
    return 0;
  }};
`;

export default LayoutWrapper;
