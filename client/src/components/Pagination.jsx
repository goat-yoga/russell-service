import React from 'react';

const Pagination = (props) => {
  let { reviewsPerPage, totalReviews, nextPage, previousPage, changePage } = props;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button aria-label="previous page of reviews" onClick={previousPage}>{'<'}</button>
      {pageNumbers.map((page, i) => (
        <button key={i} aria-label={`page ${page}`} onClick={() => changePage(page)}>{page}</button>
      ))}
      <button aria-label="next page of reviews" onClick={nextPage}>{'>'}</button>
    </div>
  );
};

export default Pagination;