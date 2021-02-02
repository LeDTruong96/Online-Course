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
		this.props.removeExpense(this.props.expense.id);
		this.props.history.push('/');
	};

	render() {
		return (
			<div>
				<ExpenseForm
					type={'Save Expense'}
					Expense={this.props.expense}
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
		editExpense: () => {
			dispatch(editExpense(props.expense.id, expense));
		},
		removeExpense: () => {
			dispatch(removeExpense(props.expense.id));
		}
	};
};
export default connect(getExpenseFromStore, mapDispatchToProps)(EditExpensePage);
