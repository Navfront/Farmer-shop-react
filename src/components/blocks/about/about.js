import React from "react";
import Container from "../../layouts/container/container";
import Heading from "../../ui/heading/heading";
import TextBlock from "../../ui/text-block/text-block";
import { StyledAbout, AboutWrapper } from "./styled";

const About = () => {
  return (
    <StyledAbout>
      <Container>
        <AboutWrapper style={{ backgroundImage: "url(./images/icons/farmer-bg.svg)" }}>
          <Heading as="h1">Магазин фермерских продуктов с доставкой</Heading>
          <TextBlock textStyle="normal">
            Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа
            клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
          </TextBlock>
        </AboutWrapper>
      </Container>
    </StyledAbout>
  );
};

export default About;
