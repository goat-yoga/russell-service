import React from 'react';
import StarsUI from './StarsUI.jsx';

const ReviewEntry = (props) => {
  let { rating, title, body, name } = props.review;

  return (
    <div className="ReviewEntry">
      <StarsUI rating={rating} />
      <div className="small-p title">{title}</div>
      <p className="small-p body"></p>
      <p className="SeeMore small-p body">{body}</p>
      <p className="small-p body name">{name}</p>
    </div>
  );
};

export default ReviewEntry;