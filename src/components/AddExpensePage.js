import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends Component {
	onSubmit = (expense) => {
		this.props.addNewExpense(expense);
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<h1>Add Expense</h1>
				<ExpenseForm type={'Add Expense'} onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewExpense: (expense) => {
			return dispatch(addExpense(expense));
		}
	};
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
