import React from 'react';
import { removeExpenses } from '../actions/expenses';

const ExpensesListItem = ({ id, description, amount, createAt, dispatch }) => {
	return (
		<div>
			<h1>{description}</h1>
			<p>
				{createAt} - {amount}
			</p>
			<button
				onClick={() => {
					dispatch(removeExpenses(id));
				}}
			>
				Remove
			</button>
		</div>
	);
};

export default ExpensesListItem;
