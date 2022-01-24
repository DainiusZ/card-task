import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css"
import CardList from "./CardList";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

import { getApiData } from "./actions";

const mapStateToProps = state =>{
  return {
    cards: state.data,
    meta: state.meta,
    isPending: state.isPending,
    error: state.error
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    setCards: () => dispatch(getApiData())
  }
}

const App = (props) => {

  // const [isLoading, setLoading] = useState(true)
  // const [cards, setCards] = useState([]);
  // const [totalItems, setTotalItems] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [cardsPerPage, setCardsPerPage] = useState(10);

  const {cards, meta: {currentPage, cardsPerPage, totalItems}, isPending} = props;
  
  useEffect(()=>{
    props.setCards();
  }, []);
  
  // console.log("props",props)
  const indexOfLastPost = currentPage * cardsPerPage;
  const indexOfFirstPost = indexOfLastPost - cardsPerPage;
  // const cardsToDisplay = cards.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }

  return !isPending ? <Spinner/> : 
    (
    <div>
      <div className="cardList">
        {/* <CardList cards = {cardsToDisplay}/> */}
      </div>
        {/* <Pagination totalItems = {totalItems} cardsPerPage = {cardsPerPage}/> */}
    </div>
  ) 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
