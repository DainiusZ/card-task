import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./App.css"
import CardList from "./CardList";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import { getApiData, setCurrentPage } from "./actions";


const App = () => {

  const cards = useSelector(state => state.cards);
  const isPending = useSelector(state => state.isPending);
  const meta = useSelector(state => state.meta);
  const {current_page: currentPage, per_page: cardsPerPage} = meta;
  const totalItems = cards.length;
  const dispatch = useDispatch();

  
  useEffect(()=>{
    dispatch(getApiData());
  }, []);
  
  const indexOfLastPost = currentPage * cardsPerPage;
  const indexOfFirstPost = indexOfLastPost - cardsPerPage;
  const cardsToDisplay = cards.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  return isPending ? <Spinner/> : 
    (
    <div>
      <div className="cardList">
        <CardList cards = {cardsToDisplay}/>
      </div>
        <Pagination totalItems = {totalItems} cardsPerPage = {cardsPerPage} paginate = {paginate(currentPage)}/>
    </div>
  ) 
}

export default App;
