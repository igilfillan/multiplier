import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";

import App from "./App";
test("renders learn react link", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('h2').text()).toEqual('Multiplier');
});


// Clicking a second time on a previously highlighted number should remove all highlighting from numbers that are multiples of the number that is clicked.
