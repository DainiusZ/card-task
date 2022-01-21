import React, { useState, useEffect } from "react";
import CardList from "./CardList";
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
      .then( response => response.json())
      .then( myJson =>{
        setCards(myJson.data)
        setMetaData(myJson.meta)
      });
  }, []);

  return (
    <CardList cards = {cards}/>
  )
}

export default App;
