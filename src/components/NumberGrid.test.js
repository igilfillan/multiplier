import React from "react";
import { mount, shallow } from "enzyme";
import NumberGrid from "./NumberGrid";
import NumberItem from "./NumberItem";
import getMultiples from '../utilities/getMultiples'

// The application will display a grid of all the numbers from 1 to 144
test("renders all numbers", () => {
  const mockMaxNumber = 144;
  let wrapper = shallow(<NumberGrid maxNumber={mockMaxNumber} />);
  expect(wrapper.find(NumberItem).length).toBe(mockMaxNumber);
});

// When the child clicks a box then all the numbers which are a multiple of that number should be highlighted in some way.
test("clicking each number highlights the correct multiples", () => {
  const mockMaxNumber = 144;
  let wrapper = mount(<NumberGrid maxNumber={mockMaxNumber} />);

  for (let i = 1; i <= mockMaxNumber; i++) {
    const multiples = getMultiples(i, mockMaxNumber);
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
  const mockMaxNumber = 144;
  const mockSelectedNumber = 23;
  let wrapper = mount(<NumberGrid maxNumber={mockMaxNumber} />);
  wrapper.find(`.number-${mockSelectedNumber}`).simulate("click");
  wrapper.find(`.number-${mockSelectedNumber}`).simulate("click");
  expect(wrapper.find(".number--isHighlighted").length).toBe(0);
});
