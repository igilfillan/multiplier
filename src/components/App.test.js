import React from "react";
import { shallow } from "enzyme";
import NumberGrid from "./NumberGrid";

import App from "./App";
test("renders a  NumberGrid", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find(NumberGrid).length).toEqual(1);
});

