import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboard from "../../components/expense-dashboard";

test("should render expense dashboard page correctly", () => {
    const wrapper = shallow(<ExpenseDashboard/>);
    expect(wrapper).toMatchSnapshot();
});