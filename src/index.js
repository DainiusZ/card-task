import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Card.css";
import Card from "./Card";
import reportWebVitals from "./reportWebVitals";
import { json } from "./data.js";

const cardsArray = json.data.map((item) => {
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
ReactDOM.render(
  <React.StrictMode>{cardsArray}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
