import React from "react";
import "./App.css";

const gridItems = count => {
  let items = [];
  for (let i = 1; i <= count; i++) {
    items.push(<button key={i}>{i}</button>);
  }
  return items;
};

const App = () => (
  <div>
    <h2>Multiplier</h2>
    {gridItems(144)}
  </div>
);

export default App;
