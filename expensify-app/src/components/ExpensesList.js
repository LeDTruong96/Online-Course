import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpensesListItem';
import getVisiableExpenese from '../selectors/expenses';

const ExpensesList = (props) => {
	return (
		<div>
			<h1>EXPENSES LIST</h1>
			{props.expenses.map((expense) => {
				return <ExpensesListItem key={expense.id} {...expense} dispatch={props.dispatch} />;
			})}
		</div>
	);
};

const getPropsFromStore = (props) => {
	return {
		expenses: getVisiableExpenese(props)
	};
};

export default connect(getPropsFromStore)(ExpensesList);
