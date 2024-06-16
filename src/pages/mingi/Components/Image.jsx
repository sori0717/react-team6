import React from 'react';

function Image({ src, isSelected, onClick }) {
  return (
    <div className = "image-container-jeong">
      <img
        src = {src}
        className = {`image-jeong ${isSelected ? 'selected-jeong' : ''}`}
        onClick = {onClick}
      />
    </div>
  );
}

export default Image;
