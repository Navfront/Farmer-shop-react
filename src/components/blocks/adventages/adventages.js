import React from "react";
import AdventageCard from "../../ui/adventage-card/adventage-card";
import Button from "../../ui/button/button";
import Heading from "../../ui/heading/heading";
import contentData from "../../../mocks/mock";
import Container from "../../layouts/container/container";
import { StyledAdventages, AdventagesList, AdventagesItem } from "./styled";

const Adventages = () => {
  if (contentData && contentData.length) {
    return (
      <StyledAdventages>
        <Container>
          <Heading as="h2" align="center">
            Почему фермерские продукты лучше?
          </Heading>
          <AdventagesList>
            {contentData.map((data, index) => {
              return (
                <AdventagesItem key={index}>
                  <AdventageCard contentData={data} key={data.ID} />
                </AdventagesItem>
              );
            })}
          </AdventagesList>
          <Button to="/order">Купить</Button>
        </Container>
      </StyledAdventages>
    );
  } else {
    return null;
  }
};

export default Adventages;
