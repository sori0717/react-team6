import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 


function Page4(props) {
  const { image2, problum, image } = props;

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap' 
  };

  return (
    <div>
      {image2 && <img src={image2} alt="text" />}
      
      {problum && <p>{problum}</p>}
      
      {image && <img src={image} />}
    </div>
  );
};

export default Page4;