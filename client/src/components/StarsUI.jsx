import React from 'react';

const StarsUI = (props) => {
  let fill = (props.rating / 5) * 100 + '%';

  return (
    <div className="StarsUI">
      <span className="fill" style={{width: fill}}></span>
    </div>
  );
};

export default StarsUI;