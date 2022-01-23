import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css"
import CardList from "./CardList";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

import { getApiData } from "./actions";

const mapStateToProps = state =>{
  console.log("fff")
  return {
    data: state.cards
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    setCards: (data) => dispatch(getApiData(data))
  }
}

const App = (props) => {

  const [isLoading, setLoading] = useState(true)
  const [cards, setCards] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(10);

  useEffect(()=>{
    
    fetch("./mock_data/list.json", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then( response => response.json())
      .then( myJson => {
        setCards(myJson.data);
        props.setCards(myJson.data); //playing with redux actions
        setCurrentPage(myJson.meta.current_page);
        setCardsPerPage(myJson.meta.per_page);
        //čia jei meta total sutatptų su visu įrašų skaičiumi myJson.data masyve
        // setTotalItems(myJson.meta.total); 
        setTotalItems(myJson.data.length);
        setLoading(false);
      });
  }, []);

  const indexOfLastPost = currentPage * cardsPerPage;
  const indexOfFirstPost = indexOfLastPost - cardsPerPage;
  const cardsToDisplay = cards.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return isLoading ? <Spinner/> : 
    (
    <div>
      <div className="cardList">
        <CardList cards = {cardsToDisplay}/>
      </div>
        <Pagination totalItems = {totalItems} cardsPerPage = {cardsPerPage} paginate = {paginate}/>
    </div>
  ) 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
