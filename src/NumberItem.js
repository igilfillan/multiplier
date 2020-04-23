import React from "react";

const NumberItem = ({ isHighlighted, value, clickHandler }) => {
  return (
    <button
      className={`number-${value}${
        isHighlighted ? " number--isHighlighted" : ""
      }`}
      value={value}
      onClick={() => {
        clickHandler(value);
      }}
    >
      {value}
    </button>
  );
};

export default NumberItem;
