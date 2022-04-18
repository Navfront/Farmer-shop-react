import Button from "../../ui/button/button";
import CheckBox from "../../ui/checkbox/checkbox";
import FormBlock from "../../ui/form-block/form-block";
import Heading from "../../ui/heading/heading";
import { InfoSlide, InfoSliderList, StyledForm, StyledProducts } from "./styled";

const Products = () => {
  return (
    <StyledProducts>
      <StyledForm
        action="#"
        method="get"
        onSubmit={(evt) => {
          evt.preventDefault();
          console.log(evt);
        }}
      >
        <FormBlock>
          <Heading as="h3">Выберите продукты</Heading>
          <CheckBox>Филе бедра цыпленка</CheckBox>
          <CheckBox>Филе бедра гуся</CheckBox>
          <CheckBox>Мякоть бедра говяжья</CheckBox>
          <CheckBox>Грудка цыпленка на кости</CheckBox>
          <CheckBox>Голень цыпленка</CheckBox>
        </FormBlock>
        <FormBlock>
          <Heading as="h3">Сделать заказ</Heading>
          <span>Цена</span>
          <p>1200 руб</p>
          <input type="text" placeholder="Введите адрес доставки"></input>
          <Button>Купить</Button>
        </FormBlock>
      </StyledForm>
      <InfoSliderList>
        <InfoSlide />
      </InfoSliderList>
    </StyledProducts>
  );
};

export default Products;
