import React from "react";
import "./Card.css";

const Card = ({ id, data }) => {
  const {
    imagesCount: number,
    updatedAt: updated,
    createdAt: created,
    statusKey: status,
    name,
    tags,
  } = data;

  const formatedDate = (inputDate) =>
    new Date(inputDate).toISOString().split("T")[0];

  const cardSpin = () => {
    document
      .querySelector(`.card__side--front${id}`)
      .classList.toggle("forward");
    document
      .querySelector(`.card__side--back${id}`)
      .classList.toggle("backward");
  };

  return (
    <div className="study__card">
      <div className={`card__side card__side--front card__side--front${id}`}>
        <img
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * number + number
          )}/200/300`}
          alt="card-pic"
        />
        <div className="card__details--front">
          <h2>{name}</h2>
          <p>Updated On: {formatedDate(updated)}</p>
          <p>Status: {status}</p>
        </div>
        <div className="flipside--front">
          <span onClick={cardSpin} className={`arrow--forward`}>
            &#10095;
          </span>
        </div>
      </div>

      <div className={`card__side card__side--back card__side--back${id}`}>
        <div className="flipside--back">
          <span onClick={cardSpin} className="arrow--back">
            &#10094;
          </span>
        </div>
        <div className="card__details--back">
          <p>"name": {name}</p>
          <p>"createdAt": {formatedDate(created)}</p>
          <p>"updatedAt": {formatedDate(updated)}</p>
          <p>"statusKey": {status}</p>
          <p>"imagesCount": {number}</p>
          <p>"tags": {tags}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
