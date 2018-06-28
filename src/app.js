import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/app-router';
import configureStore from './store/configure-store';

import { addExpense } from './actions/expenses';
import { sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 245, createdAt: 4500 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 121, createdAt: 1000 }));
store.dispatch(addExpense({ description: "Mortage", amount: 2000, createdAt: 109500}));
store.dispatch(addExpense({ description: "Rent", amount: 1200, createdAt: 204000 }));
store.dispatch(sortByDate());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));