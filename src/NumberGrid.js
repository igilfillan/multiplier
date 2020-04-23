import React, { useState } from "react";
import NumberItem from "./NumberItem";

const NumberGrid = ({ count }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const isHighlighted = (number, selectedNumber) => {
    return number % selectedNumber === 0 ? true : false;
  };

  const numberClickHandler = number => {
    number === selectedNumber
      ? setSelectedNumber(null)
      : setSelectedNumber(number);
  };

  let items = [];

  for (let i = 1; i <= count; i++) {
    items.push(
      <NumberItem
        isHighlighted={isHighlighted(i, selectedNumber)}
        value={i}
        clickHandler={numberClickHandler}
        key={i}
      />
    );
  }
  return items;
};

export default NumberGrid;
