import React from "react";

const Card = ({ name, number, updated, status}) =>{
  return(
    <div className="study__card">
      <img src={`https://picsum.photos/id/${Math.floor((Math.random() * number) + number)}/200/300`} alt="card-pic" />
      <div>
        <h2>{name}</h2>
        <p>{updated}</p>
        <p>{status}</p>
      </div>
    </div>
  )
}

export default Card;