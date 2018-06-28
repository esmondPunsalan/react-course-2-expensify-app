import moment from 'moment';
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@init" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {type: "REMOVE_EXPENSE", id: expenses[1].id };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense by id not found", () => {
    const action = {type: "REMOVE_EXPENSE", id: "-1" };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should add expense", () => {
    const expense = { description:"Something", note: "Something", amount: 2000000, createdAt: moment(0), id: "9" }
    const action = { type: "ADD_EXPENSE", expense: expense };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([... expenses, expense]);
});

test("should edit expense", () => {
    const updates = { description:"Something2", note: "Something2", amount: 4848484, createdAt: moment(0), id: "1" }
    const action = { type: "EDIT_EXPENSE", id: "1", updates: updates };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual(updates);
});

test("should not edit expense if id not found", () => {
    const updates = { description:"Something2", note: "Something2", amount: 4848484, createdAt: moment(0), id: "-1" }
    const action = { type: "EDIT_EXPENSE", id: "-1", updates: updates };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
