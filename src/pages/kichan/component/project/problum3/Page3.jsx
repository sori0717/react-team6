import React from 'react';

function Page3(props) {
  const { image2, problum, image, problumtext } = props;

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap'
  };

  const imageStyle = {
    float: 'right',
    marginLeft: '10px'
  };

  return (
    <div>
      {image2 && <img src={image2} alt="text" style={imageStyle} />}
      <br />
      {problum && <p>{problum}</p>}

      {image && <img src={image} />}

      {problumtext && <p>{problumtext}</p>}
    </div>
  );
}

export default Page3;