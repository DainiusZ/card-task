import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import CardList from "./CardList";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import { getApiData } from "./actions";

const App = () => {
  const [currentPage, setPageNumber] = useState(1);
  const cards = useSelector((state) => state.cards);
  const isPending = useSelector((state) => state.isPending);
  const meta = useSelector((state) => state.meta);
  const { per_page: cardsPerPage } = meta;
  const totalItems = cards.length;
  // const totalItems = meta.total;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  const indexOfLastPost = currentPage * cardsPerPage;
  const indexOfFirstPost = indexOfLastPost - cardsPerPage;
  const cardsToDisplay = cards.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  return isPending ? (
    <Spinner />
  ) : (
    <div>
      <div className="cardList">
        <CardList cards={cardsToDisplay} />
      </div>
      <Pagination
        totalItems={totalItems}
        cardsPerPage={cardsPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
