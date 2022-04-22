import { useState } from "react";
import Heading from "../heading/heading";
import {
  ProductCardWrapper,
  ProductCardImage,
  ProductCardTabsList,
  ProductCardTabButton,
  ProductCardDescription,
  ProductCardPriceWrapper,
  ProductCardInfo,
  ProductCardCharacteristics,
} from "./styled";

const tabNames = ["Описание", "Характеристики", "Свойства"];

const ProductCard = ({ productData }) => {
  const [choosenTab, setChoosenTab] = useState(0);

  const characteristicsData = productData.content.characteristics;
  const propertiesData = productData.content.properties;

  return (
    <ProductCardWrapper>
      <ProductCardImage src={productData.content.photoUrl} />
      <ProductCardInfo>
        <Heading as="h2">{productData.productTitle}</Heading>
        <ProductCardTabsList>
          {tabNames.map((tabName, index) => {
            return (
              <li key={index}>
                <ProductCardTabButton
                  current={index === choosenTab && true}
                  onClick={() => {
                    setChoosenTab(index);
                  }}
                >
                  {tabName}
                </ProductCardTabButton>
              </li>
            );
          })}
        </ProductCardTabsList>

        <ProductCardDescription isShow={tabNames.indexOf("Описание") === choosenTab}>
          <p> {productData.content.description}</p>
          <ProductCardPriceWrapper>
            <span>
              {productData.price ? productData.price : 0} руб. / {productData.amount ? productData.amount : 0} гр.
            </span>
          </ProductCardPriceWrapper>
        </ProductCardDescription>

        <ProductCardCharacteristics isShow={tabNames.indexOf("Характеристики") === choosenTab}>
          <dl>
            {characteristicsData &&
              Object.keys(characteristicsData).map((item, index) => {
                return (
                  <p key={index}>
                    <dt>{item} </dt>
                    <dd>{characteristicsData[item]}</dd>
                  </p>
                );
              })}
          </dl>
        </ProductCardCharacteristics>
        <ProductCardCharacteristics isShow={tabNames.indexOf("Свойства") === choosenTab}>
          <dl>
            {propertiesData &&
              Object.keys(propertiesData).map((item, index) => {
                return (
                  <p key={index}>
                    <dt>{item} </dt>
                    <dd>{propertiesData[item]}</dd>
                  </p>
                );
              })}
          </dl>
        </ProductCardCharacteristics>
      </ProductCardInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
