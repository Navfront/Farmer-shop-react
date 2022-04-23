import styled from "styled-components";

export const StyledPageHeader = styled.header`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  background-color: white;
  margin-left: calc(100vw - 100%);
`;

export const PageHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
`;
