import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/expenses-summary";

test("should render expense summary component correctly with empty array", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0}/>);
    expect(wrapper).toMatchSnapshot();
});

test("should render expense summary component correctly with data", () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={459875}/>);
    expect(wrapper).toMatchSnapshot();
});