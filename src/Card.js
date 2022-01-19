import React from "react";

const Card = () =>{
  return(
    <div className="study__card">
      <img src="https://picsum.photos/200/300" alt="card-pic" />
      <div>
        <h2>Name</h2>
        <p>Updated</p>
        <p>Status</p>
      </div>
    </div>
  )
}

export default Card;