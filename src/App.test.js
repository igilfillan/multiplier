import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";

import App from "./App";
test("renders learn react link", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('h2').text()).toEqual('Multiplier');
});

// The application will display a grid of all the numbers from 1 to 144
test("renders all numbers", () => {
  let wrapper = shallow(<App />);
  expect(wrapper.find('button').length).toEqual(144);
});

// When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way.

// Clicking a second time on a previously highlighted number should remove all highlighting from numbers that are multiples of the number that is clicked.
