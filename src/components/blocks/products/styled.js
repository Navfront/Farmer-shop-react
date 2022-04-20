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

  display: grid;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  align-self: flex-start;
`;

export const InfoSlide = styled.li`
  padding: 0;
`;
