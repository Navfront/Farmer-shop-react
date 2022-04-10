import React from "react";
import AdventageCard from "../../ui/adventage-card/adventage-card";
import Button from "../../ui/button/button";
import Heading from "../../ui/heading/heading";
import contentData from "../../../mocks/mock";
import "./style.css";

const Adventages = () => {
  return (
    <section className="adventages">
      <div className="container">
        <Heading className="adventages__heading" level="1">
          Почему фермерские продукты лучше?
        </Heading>
        <ul className="adventages__list">
          {contentData.map((data) => {
            return <AdventageCard contentData={data} key={data.ID} />;
          })}
        </ul>
        <Button>Купить</Button>
      </div>
    </section>
  );
};

export default Adventages;
