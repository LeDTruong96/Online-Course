import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends Component {
	onSubmit = (id, expense) => {
		this.props.editExpense(id, expense);
		this.props.history.push('/');
	};

	onClick = () => {
		// console.log(this.props.expense.id);
		this.props.removeExpense(this.props.expense.id);
		this.props.history.push('/');
	};

	render() {
		console.log(this.props);
		return (
			<div>
				<ExpenseForm
					type={'Save Expense'}
					editExpense={this.props.expense}
					onSubmit={this.onSubmit}
				/>
				<button onClick={this.onClick}>Remove Expense </button>
			</div>
		);
	}
}

const getExpenseFromStore = (states, props) => {
	return {
		expense: states.expenses.find((expense) => {
			return expense.id === props.match.params.id;
		})
	};
};

const mapDispatchToProps = (dispatch, props) => {
	return {
		editExpense: (id, expense) => {
			dispatch(editExpense(id, expense));
		},
		removeExpense: (id) => {
			dispatch(removeExpense(id));
		}
	};
};
export default connect(getExpenseFromStore, mapDispatchToProps)(EditExpensePage);
