import React from "react";
import numeral from "numeral"
import getExpensesTotal from "../selectors/expenses-total";
import selectExpenses from '../selectors/expenses';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const ExpensesSummary = ({ expensesCount, expensesTotal, hiddenExpensesCount, hiddenExpensesTotal }) => {
    const expenseWord = expensesCount == 1 ? "expense" : "expenses";
    const formatedTotal = numeral(expensesTotal / 100).format("$0,0.00");

    const hiddenExpenseWord = hiddenExpensesCount == 1 ? "expense" : "expenses";
    const hiddenFormatedTotal = numeral(hiddenExpensesTotal / 100).format("$0,0.00");

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formatedTotal}</span></h1>
                {hiddenExpensesCount > 0 && <div>{hiddenExpensesCount} hidden {hiddenExpenseWord} totalling {hiddenFormatedTotal}</div>}
                <div className="page-header__actions">
                    <Link className="button" to="/create" >+ Expense</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const visibleExpensesTotal = getExpensesTotal(visibleExpenses);
    const hiddenExpensesCount = state.expenses.length - visibleExpenses.length;
    const hiddenExpensesTotal = getExpensesTotal(state.expenses) - visibleExpensesTotal;

    return { 
        expensesCount: visibleExpenses.length,
        expensesTotal: visibleExpensesTotal,
        hiddenExpensesCount,
        hiddenExpensesTotal
    };
}

export default connect(mapStateToProps)(ExpensesSummary);