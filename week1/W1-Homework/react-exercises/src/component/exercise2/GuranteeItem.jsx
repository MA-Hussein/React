import React from 'react';
import Guarantee from './Guarantee.jsx';
import chat from './chat.png';
import coin from './coin.png';
import fDelivery from './f-delivery.png';

const guaranteeItems = [
    {
      img: chat,
      title: 'Free Shipping',
      description: 'Free shipping for all your orders',
    },
    {
      img: coin,
      title: '100% money back',
      description: 'Get your money back',
    },
    {
      img: fDelivery,
      title: 'Online Support 24/7',
      description: 'Our support team are ready to help you all the time',
    },
  ];
  function GuaranteeItem(){
  return(
  <div style={{ display: 'flex', justifyContent: 'space-around', margin: '5%' }}>
       {guaranteeItems.map((guaranteeItem, i) => (
          <Guarantee key={i} guaranteeItem={guaranteeItem} />
        ))}
  </div>
  );
  }
  export default GuaranteeItem;
