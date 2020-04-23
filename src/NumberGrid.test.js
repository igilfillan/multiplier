import React from "react";
import { mount, shallow } from "enzyme";
import NumberGrid from "./NumberGrid";
import NumberItem from "./NumberItem";

// The application will display a grid of all the numbers from 1 to 144
test("renders all numbers", () => {
  let wrapper = shallow(<NumberGrid count={144} />);
  expect(wrapper.find(NumberItem).length).toBe(144);
});

// When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way.
test("highlights all numbers when #1 is clicked", () => {
  let wrapper = mount(<NumberGrid count={144} />);
  wrapper.find(".number-1").simulate("click");
  expect(wrapper.find('.number--isHighlighted').length).toBe(144);
});

// Clicking a second time on a previously highlighted number should remove all highlighting from numbers that are multiples of the number that is clicked.
