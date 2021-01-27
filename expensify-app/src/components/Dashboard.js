import React from 'react';
import ExpensesList from './ExpensesList';
import ExpensesListFilters from './ExpensesListFilters';

const DashboardPage = (props) => {
	return (
		<div>
			<p>This is Dash board</p>
			<ExpensesListFilters />
			<ExpensesList />
		</div>
	);
};

export default DashboardPage;
