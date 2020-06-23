import React from 'react';

const Pagination = (props) => {
  let { reviewsPerPage, totalReviews, changePage, selectPage, currentPage } = props;
  let lastPage = Math.ceil(totalReviews / reviewsPerPage);

  const pageNumbers = [];

  for (let i = 1; i <= lastPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button aria-label="previous page of reviews" className="option left" onClick={() => changePage()} disabled={currentPage === 1 ? 'disabled' : null}>{'<'}</button>
      {pageNumbers.map((page, i) => (
        <button key={i} aria-label={`page ${page}`} className={currentPage === page ? 'option active' : 'option '} onClick={() => selectPage(page)}>{page}</button>
      ))}
      <button aria-label="next page of reviews" className="option right" onClick={() => changePage(true)} disabled={currentPage === lastPage ? 'disabled' : null}>{'>'}</button>
    </div>
  );
};

export default Pagination;