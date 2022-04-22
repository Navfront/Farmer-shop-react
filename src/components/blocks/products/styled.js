import styled from "styled-components/macro";

export const StyledProducts = styled.section`
  padding: 40px 0 0;
  display: grid;
  gap: 20px;
  grid-template-columns: 353px auto;

  & .swiper {
    flex: 1;
  }

  & .swiper-slide {
    height: auto !important;
  }
`;

export const StyledForm = styled.form`
  * + * {
    margin-top: 20px;
  }
  button {
    margin-bottom: 40px;
  }
`;

export const InfoSliderLayout = styled.div`
  display: flex;
  grid-column: 2;

  & .swiper-scrollbar {
    right: -15px;
  }
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
