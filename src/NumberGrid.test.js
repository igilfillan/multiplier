import React from "react";
import { mount, shallow } from "enzyme";
import NumberGrid from "./NumberGrid";
import NumberItem from "./NumberItem";

const getMultiples = (number, count) => {
  let items = [];
  for (let i = 1; i <= count; i++) {
    if (i % number === 0) {
      items.push(i);
    }
  }
  return items;
};

// The application will display a grid of all the numbers from 1 to 144
test("renders all numbers", () => {
  const mockCount = 144;
  let wrapper = shallow(<NumberGrid count={mockCount} />);
  expect(wrapper.find(NumberItem).length).toBe(mockCount);
});

// When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way.
test("clicking each number highlights the correct multiples", () => {
  const mockCount = 144;
  let wrapper = mount(<NumberGrid count={mockCount} />);

  for (let i = 1; i <= mockCount; i++) {
    const multiples = getMultiples(i, mockCount);
    wrapper.find(`.number-${i}`).simulate("click");
    const highlightedItems = wrapper.find(".number--isHighlighted");

    expect(highlightedItems.length).toBe(multiples.length);

    highlightedItems.forEach(item => {
      expect(multiples.includes(item.props("value")));
    });
  }
});

// Clicking a second time on a previously highlighted number should remove all highlighting from numbers that are multiples of the number that is clicked.
test("removes highlight class from all numbers when a number is clicked twice", () => {
  const mockCount = 144;
  const mockNumber = 23;
  let wrapper = mount(<NumberGrid count={mockCount} />);
  wrapper.find(`.number-${mockNumber}`).simulate("click");
  wrapper.find(`.number-${mockNumber}`).simulate("click");
  expect(wrapper.find(".number--isHighlighted").length).toBe(0);
});
