import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/expense-list-item";
import expenses from "../fixtures/expenses";

test("should render expense list item", () => {
    const expense = expenses[2];
    const wrapper = shallow(<ExpenseListItem key={expense["id"]} {...expense}/>);
    expect(wrapper).toMatchSnapshot();
});