import styled from "styled-components/macro";

export const StyledProducts = styled.section`
  padding: 40px 0 0;
  display: grid;
  gap: 20px;
  grid-template-columns: 353px auto;
  overflow: hidden;
`;

export const StyledForm = styled.form`
  * + * {
    margin-top: 20px;
  }
  *:last-child {
    margin-bottom: 40px;
  }
`;

export const InfoSliderLayout = styled.div`
  display: flex;
  grid-column: 2;
  overflow: hidden;
  height: ${({ height }) => (height ? height + "px" : "auto")};
`;

export const InfoSlide = styled.li`
  padding: 0;
`;

export const ProductsPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  color: #333333;
  margin-bottom: 32px;

  span {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #333333;
  }
`;
