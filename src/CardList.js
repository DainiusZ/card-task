import React from "react";
import Card from "./Card";

function CardList({ cards }) {
  const cardsArray = cards.map((item) => {
    return (
      <Card
        key={item.id}
        number={item.imagesCount}
        name={item.name}
        updated={item.updatedAt}
        status={item.statusKey}
      />
    );
  });
  return cardsArray;
}

export default CardList;
