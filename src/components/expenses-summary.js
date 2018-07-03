import React from "react";
import numeral from "numeral"
import getExpensesTotal from "../selectors/expenses-total";
import selectExpenses from '../selectors/expenses';
import { connect } from "react-redux";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount == 1 ? "expense" : "expenses";
    const formatedTotal = numeral(expensesTotal / 100).format("$0,0.00");

    return (
        <div>
            Viewing {expensesCount} {expenseWord} totalling {formatedTotal}
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    
    return { 
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    };
}

export default connect(mapStateToProps)(ExpensesSummary);