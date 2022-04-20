import styled from "styled-components/macro";

export const ProductCardWrapper = styled.article`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 248px 1fr;
  padding: 20px;
  gap: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: #333333;
    margin-bottom: 16px;
  }
`;

export const ProductCardImage = styled.img`
  width: 248px;
  height: 248px;
  object-fit: cover;
`;

export const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductCardTabsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

  & li {
    margin-right: 8px;
  }
`;

export const ProductCardTabButton = styled.button`
  padding: 8px 12px;
  color: ${(props) => (props.current ? "#ffffff" : "#333333")};
  background: ${(props) => (props.current ? "#88AA4D" : "#f7f7f7")};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
`;

export const ProductCardPriceWrapper = styled.div`
  display: inline-flex;
  margin-top: auto;
  background-color: #d8ecfe;
  padding: 4px 8px;
  color: #333333;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
`;

export const ProductCardContent = styled.div``;

export const ProductCardDescription = styled.div`
  display: ${(props) => (props.isShow ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;

export const ProductCardCharacteristics = styled.div`
  display: ${(props) => (props.isShow ? "block" : "none")};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #333333;
  dt {
    font-weight: 700;
    display: inline;
  }
  dd {
    display: inline;
    margin-left: 0;
  }
`;
