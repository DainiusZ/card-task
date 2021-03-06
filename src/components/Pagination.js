import React from "react";
import "./Pagination.css";

const Pagination = ({ totalItems, cardsPerPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#!">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
