import React from 'react';

const Guarantee = ({ guaranteeItem }) => {
  const { img, title, description } = guaranteeItem;
  return (
    <div>
      <img src={img} alt='service-img' />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;