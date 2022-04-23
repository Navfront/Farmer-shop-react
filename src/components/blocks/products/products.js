import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Scrollbar } from "swiper";
import "swiper/css/scrollbar";

import productData from "../../../mocks/products";
import Button from "../../ui/button/button";
import CheckBox from "../../ui/checkbox/checkbox";
import FormBlock from "../../ui/form-block/form-block";
import Heading from "../../ui/heading/heading";
import ProductCard from "../../ui/product-card/product-card";
import { InfoSliderLayout, ProductsPrice, StyledForm, StyledProducts } from "./styled";

const AUTO_CHECK_FROM = 0;
const AUTO_CHECK_TO = 3;

const getInitChecksArray = () => {
  return new Array(productData.length).fill(false).fill(true, AUTO_CHECK_FROM, AUTO_CHECK_TO);
};

const getNewCheckedArray = (array, indexOfCheck) => {
  const newArray = array.slice();
  newArray[indexOfCheck] = !newArray[indexOfCheck];
  return newArray;
};

SwiperCore.use([Mousewheel]);

const Products = () => {
  const [priceCounter, setPriceCounter] = useState(0);
  const [adressInputValue, setAdressInputValue] = useState("");
  const [productsCheckedArray, setProductsCheckedArray] = useState(getInitChecksArray());
  const [swiper, setSwiper] = useState();

  const handlerOrderSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.currentTarget);
    const orderedProducts = [];
    productsCheckedArray.forEach((productIsBuy, index) => {
      productIsBuy && orderedProducts.push(productData[index].productTitle);
    });
    alert(
      `Вы купили:\n${orderedProducts.join(
        ",\n"
      )}.\n\nНа сумму: ${priceCounter}р.\n\nЗаказ доствим по адрессу:\n${data.get("adress")}`
    );
    evt.target.reset();
    setAdressInputValue("");
    setProductsCheckedArray(getInitChecksArray());
  };

  const calcPrice = () => {
    let summ = 0;
    productData.forEach((item, index) => {
      if (productsCheckedArray[index]) {
        summ += item.price;
      }
    });

    return summ;
  };

  useEffect(() => {
    let newPrice = calcPrice();
    setPriceCounter(newPrice);
  }, [productsCheckedArray]);

  return productData && productData.length ? (
    <StyledProducts>
      <StyledForm action="#" method="get" onSubmit={handlerOrderSubmit}>
        <FormBlock>
          <Heading as="h3">Выберите продукты</Heading>
          {productData.map((item, index) => {
            return (
              <CheckBox
                name="products[]"
                key={"checkbox" + item.id}
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
      <InfoSliderLayout style={{ position: "relative" }}>
        <Swiper
          modules={[Scrollbar]}
          scrollbar={{
            hide: true,
          }}
          mousewheel
          direction="vertical"
          autoHeight="true"
          spaceBetween={20}
          slidesPerView={2.5}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
        >
          {productData.map((item, index) => {
            return (
              <SwiperSlide key={"slide" + index}>
                <ProductCard productData={item}></ProductCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </InfoSliderLayout>
    </StyledProducts>
  ) : (
    <Heading as={"h2"}>Продукты были слишком вкусные и их разобрали.</Heading>
  );
};

export default Products;
