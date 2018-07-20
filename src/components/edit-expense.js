import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expense-form';
import RemoveModal from './remove-modal';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            removeRequest: false
        };
    }
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    }
    onRemoveRequest = () => {
        this.setState(() => ({ removeRequest: true }));
    }
    closeRemoveModal = (e) => {
        const result = e.target.value == 1 ? true : false;
        this.setState(() => ({ removeRequest: false }));

        if(result) {
            this.props.startRemoveExpense({ id: this.props.expense.id });
            this.props.history.push("/");
        }
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={ this.onSubmit }/>
                    <button className="button button--secondary" onClick={this.onRemoveRequest}>Remove</button>
                </div>
                <RemoveModal removeRequest={this.state.removeRequest} closeRemoveModal={this.closeRemoveModal} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);