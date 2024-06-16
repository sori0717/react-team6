import React from 'react';

function Text({ text, isSelected, onClick }) {
  return (
    <div
      className = {`text-jeong ${isSelected ? 'selected-jeong' : ''}`}
      onClick = {onClick}
    >
      {text}
    </div>
  );
}

export default Text;
