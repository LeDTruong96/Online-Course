import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
	return (
		<div>
			Editing the expense with id of {props.match.params.id}
			<ExpenseForm
				type={'Save Expense'}
				editExpense={props.expense}
				onSubmit={(expense) => {
					props.dispatch(editExpense(props.match.params.id, expense));
					props.history.push('/');
				}}
			/>
			<button
				onClick={() => {
					props.dispatch(removeExpense(props.match.params.id));
					props.history.push('/');
				}}
			>
				Remove Expense{' '}
			</button>
		</div>
	);
};

const getExpenseFromStore = (states, props) => {
	return {
		expense: states.expenses.find((expense) => {
			return expense.id === props.match.params.id;
		})
	};
};

export default connect(getExpenseFromStore)(EditExpensePage);
