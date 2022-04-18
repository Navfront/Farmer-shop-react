import styled from "styled-components/macro";

export const StyledProducts = styled.section`
  padding: 40px 0;
  display: grid;
  gap: 20px;
  grid-template-columns: 353px auto;
`;

export const StyledForm = styled.form`
  * + * {
    margin-top: 20px;
  }
`;

export const InfoSliderList = styled.ul`
  grid-column: 2;
  background-color: lightcyan; //123
  display: grid;
  grid-template-rows: 1fr;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const InfoSlide = styled.li`
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 288px;
`;
