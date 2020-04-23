import React from 'react';

const Guarantee = ({ guaranteeItem: { img, title, description }}) => {
  return (
    <div>
      <img src={img} alt='service-img' />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;
