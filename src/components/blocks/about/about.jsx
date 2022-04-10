import React from "react";
import Heading from "../../ui/heading/heading";
import TextBlock from "../../ui/text-block/text-block";

import "./style.css";

const About = () => {
  return (
    <section className="about">
      <div className="about__wrapper container" style={{ backgroundImage: "url(./images/icons/farmer-bg.svg)" }}>
        <Heading level="1" className="about__heading">
          Магазин фермерских продуктов с доставкой
        </Heading>
        <TextBlock className="about__text text--spaced">
          Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа
          клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
        </TextBlock>
      </div>
    </section>
  );
};

export default About;
