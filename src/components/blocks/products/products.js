import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import productData from "../../../mocks/products";
import Button from "../../ui/button/button";
import CheckBox from "../../ui/checkbox/checkbox";
import FormBlock from "../../ui/form-block/form-block";
import Heading from "../../ui/heading/heading";
import ProductCard from "../../ui/product-card/product-card";
import { InfoSliderLayout, ProductsPrice, StyledForm, StyledProducts } from "./styled";

const AUTO_CHECK_FROM = 0;
const AUTO_CHECK_TO = 3;

const Products = () => {
  const [priceCounter, setPriceCounter] = useState(0);
  const [adressInputValue, setAdressInputValue] = useState("");
  const [productsCheckedArray, setProductsCheckedArray] = useState(
    new Array(productData.length).fill(false).fill(true, AUTO_CHECK_FROM, AUTO_CHECK_TO)
  );
  const [swiper, setSwiper] = useState();

  const getNewCheckedArray = (array, indexOfCheck) => {
    const newArray = array.slice();
    newArray[indexOfCheck] = !newArray[indexOfCheck];
    return newArray;
  };

  const setPrice = () => {
    let summ = 0;

    productData.forEach((item, index) => {
      if (productsCheckedArray[index]) {
        summ += item.price;
      }
    });
    setPriceCounter(summ);
  };

  useEffect(() => {
    setPrice();
  }, [productsCheckedArray]);

  return (
    <StyledProducts>
      <StyledForm
        action="#"
        method="get"
        onSubmit={(evt) => {
          evt.preventDefault();
          const data = new FormData(evt.currentTarget);
          const orderedProducts = [];
          data.forEach((el) => orderedProducts.push(el));
          alert(
            `Вы успешно сделали заказ на сумму: ${priceCounter}р. Продукты ${orderedProducts}. Заказ доствим по адрессу:`
          );
        }}
      >
        <FormBlock>
          <Heading as="h3">Выберите продукты</Heading>
          {productData.map((item, index) => {
            return (
              <CheckBox
                name="products[]"
                key={item.id}
                checked={productsCheckedArray[index]}
                value={item.productName}
                onChange={(evt) => {
                  setProductsCheckedArray(getNewCheckedArray(productsCheckedArray, index));
                  evt.target.checked && swiper.slideTo(index);
                }}
              >
                {item.productTitle}
              </CheckBox>
            );
          })}
        </FormBlock>
        <FormBlock>
          <Heading as="h3">Сделать заказ</Heading>
          <input
            type="text"
            name="adress"
            value={adressInputValue}
            onChange={(evt) => {
              setAdressInputValue(evt.target.value);
            }}
            placeholder="Введите адрес доставки"
          ></input>
          <ProductsPrice>
            <span>Цена</span>
            {priceCounter} руб.
          </ProductsPrice>

          <Button width={"100%"} disabled={adressInputValue && priceCounter > 0 ? false : true}>
            Купить
          </Button>
        </FormBlock>
      </StyledForm>
      <InfoSliderLayout>
        <Swiper
          direction="vertical"
          autoHeight="true"
          spaceBetween={20}
          slidesPerView={2.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
        >
          {productData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductCard productData={item}></ProductCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </InfoSliderLayout>
    </StyledProducts>
  );
};

export default Products;
