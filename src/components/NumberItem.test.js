import React from "react";
import { mount, shallow } from "enzyme";
import NumberItem from "./NumberItem";

test("button has correct value", () => {
  let mockValue = 3;
  let wrapper = shallow(<NumberItem value={mockValue} />);
  expect(wrapper.find('button').prop('value')).toBe(3);
});

test("button has correct text", () => {
  let mockValue = 98;
  let wrapper = shallow(<NumberItem value={mockValue} />);
  expect(wrapper.find('button').text()).toBe('98');
});
