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

const ProductCard = ({ productData }) => {
  const [choosenTab, setChoosenTab] = useState(0);

  const tabNames = ["Описание", "Характеристики", "Свойства"];
  const characteristicsNames = {
    fullAmount: "Масса:",
    expiration: "Срок годности:",
    race: "Порода",
    from: "Место происхождения:",
  };
  const propertiesNames = {
    energy: "Энергетическая ценность:",
    foodValue: "Пищевая ценность:",
  };

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
            <p>
              <dt> {productData.content.characteristics.fullAmount ? characteristicsNames.fullAmount + " " : null}</dt>
              <dd> {productData.content.characteristics.fullAmount}</dd>
            </p>
            <p>
              <dt> {productData.content.characteristics.expiration ? characteristicsNames.expiration + " " : null}</dt>
              <dd> {productData.content.characteristics.expiration}</dd>
            </p>
            <p>
              <dt> {productData.content.characteristics.race ? characteristicsNames.race + " " : null}</dt>
              <dd> {productData.content.characteristics.race}</dd>
            </p>
            <p>
              <dt> {productData.content.characteristics.from ? characteristicsNames.from + " " : null}</dt>
              <dd> {productData.content.characteristics.from}</dd>
            </p>
          </dl>
        </ProductCardCharacteristics>
        <ProductCardCharacteristics isShow={tabNames.indexOf("Свойства") === choosenTab}>
          <dl>
            <p>
              <dt> {productData.content.properties.energy ? propertiesNames.energy : null}</dt>
              <dd> {productData.content.properties.energy}</dd>
            </p>
            <p>
              <dt> {productData.content.properties.foodValue ? propertiesNames.foodValue : null}</dt>
              <dd> {productData.content.properties.foodValue}</dd>
            </p>
          </dl>
        </ProductCardCharacteristics>
      </ProductCardInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;
