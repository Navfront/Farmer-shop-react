import React from "react";
import AdventageCard from "../../ui/adventage-card/adventage-card";
import Button from "../../ui/button/button";
import Heading from "../../ui/heading/heading";
import contentData from "../../../mocks/mock";
import "./style.css";

const Adventages = () => {
  if (contentData && contentData.length) {
    return (
      <section className="adventages">
        <div className="container">
          <Heading className="adventages__heading" level="1">
            Почему фермерские продукты лучше?
          </Heading>
          <ul className="adventages__list">
            {contentData.map((data) => {
              return (
                <li className="adventages__item">
                  <AdventageCard contentData={data} key={data.ID} />
                </li>
              );
            })}
          </ul>
          <Button>Купить</Button>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default Adventages;
