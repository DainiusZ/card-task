import React from "react";
import Card from "./Card";

function CardList({ cards }) {
  const cardsArray = cards.map((item, index) => {
    return <Card key={item.id} id={index} data={item} />;
  });
  return cardsArray;
}

export default CardList;
