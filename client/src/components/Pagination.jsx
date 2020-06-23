import React from 'react';

const Pagination = (props) => {
  let { reviewsPerPage, totalReviews, nextPage, changePage } = props;

  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button aria-label="previous page of reviews">{'<'}</button>
      {pageNumbers.map((page, i) => (
        <button key={i} aria-label={`page ${page}`}>{page}</button>
      ))}
      <button aria-label="next page of reviews">{'>'}</button>
    </div>
  );
};

export default Pagination;