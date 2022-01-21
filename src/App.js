import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Card.css";

function App() {

  const [cards, setCards] = useState([]);
  const [metaData, setMetaData] = useState({});

  useEffect(()=>{
    fetch("./mock_data/list.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then( response => {
        response.json();
      })
      .then( myJson => {
        setCards(myJson.data)
        setMetaData(myJson.meta)
      });
  }, []);


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
  return (
    cardsArray
  )
}

export default App;
