import React from "react";
import "./NumberItem.css";

const NumberItem = ({ isHighlighted, value, clickHandler }) => {
  return (
    <button
      className={`number number-${value}${
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
