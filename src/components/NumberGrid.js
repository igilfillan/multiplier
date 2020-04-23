import React, { useState } from "react";
import NumberItem from "./NumberItem";
import isMultiple from "../utilities/isMultiple";

const NumberGrid = ({ maxNumber }) => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const numberClickHandler = number => {
    number === selectedNumber
      ? setSelectedNumber(null)
      : setSelectedNumber(number);
  };

  let items = [];

  for (let i = 1; i <= maxNumber; i++) {
    items.push(
      <NumberItem
        isHighlighted={isMultiple(i, selectedNumber)}
        value={i}
        clickHandler={numberClickHandler}
        key={i}
      />
    );
  }
  return items;
};

export default NumberGrid;
