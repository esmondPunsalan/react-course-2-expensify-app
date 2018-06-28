import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Add Expense
const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// Remove Expense
const removeExpense = ({ id } = {}) => (
    { type: "REMOVE_EXPENSE", id }
);

// Edit Expense
const editExpense = (id, updates) => (
    { type: "EDIT_EXPENSE", id, updates }
);

// Set Text Filter
const setTextFilter = (text = "") => (
    { type: "SET_TEXT_FILTER", text }
);

// Sort by date
const sortByDate = (text = "") => (
    { type: "SORT_BY_DATE" }
);

// Sort by amount
const sortByAmount = (text = "") => (
    { type: "SORT_BY_AMOUNT" }
);

// Set Start Date
const setStartDate = (startDate) => (
    { type: "SET_START_DATE", startDate }
);

// set End Date
const setEndDate = (endDate) => (
    { type: "SET_END_DATE", endDate }
);

//
// Expenses Reducer
//
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => action.id !== id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return { ...expense, ...action.updates };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

//
// filters reducer
//

const filtersReducerDefaultState = {
    text: "",
    sortBy: "", 
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER":
            return { ...state, text: action.text };
        case "SORT_BY_DATE":
            return { ...state, sortBy: "date" };
        case "SORT_BY_AMOUNT":
            return { ...state, sortBy: "amount" };
        case "SET_START_DATE":
            return { ...state, startDate: action.startDate };
        case "SET_END_DATE":
            return { ...state, endDate: action.endDate };
        default:
            return state;
    }
};

// get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        switch(sortBy) {
            case 'date':
                return a.createdAt < b.createdAt ? 1 : -1;
            case 'amount':
                return a.amount < b.amount ? 1 : -1;
        }
    });
};

// store creation

 const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
 );

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 100, createdAt: -100000 }));
const expenseTwo = store.dispatch(addExpense({ description: "Coffee", amount: 300, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: "Car", amount: 400, createdAt: -2000 }));

store.dispatch(sortByAmount());

/*
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 } ));

store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

*/

//store.dispatch(setTextFilter("e"));
//store.dispatch(setStartDate(2000));


/*
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
store.dispatch(setEndDate());
*/


/*
const demoState = {
    expenses: [{
        id: "sdfasdfds",
        description: "January Rent",
        note: "This was the final payment for that address",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
*/
