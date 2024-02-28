import React, { useState } from 'react';
import MonthCard from './MonthCard';
import { Link } from "react-router-dom";
import NotFound from "./NotFound.js";

const MonthList = ({ months, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  // Calculate total number of pages
  const totalPages = Math.ceil(months.length / pageSize);

  // Calculate starting and ending index of birds for current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, months.length - 1);

  // Get the subset of birds for the current page
  const currentBirds = months.slice(startIndex, endIndex + 1);

  // Function to handle pagination navigation
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-fluid px-5 py-5">
      <h2 className="mb-5">{title}</h2>
      <div className="row justify-text-between">
        {currentBirds.map((month) => (
          <div key={month.id} className="col-lg-3 col-md-6 mb-4">
            <MonthCard month={month} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => goToPage(currentPage - 1)}>Previous</button>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => goToPage(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={() => goToPage(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};


export default MonthList;