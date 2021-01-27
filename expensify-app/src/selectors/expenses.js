// Get visible expenses
export default ({ expenses, filters }) => {
	return expenses
		.filter((expense) => {
			const matchStartDate =
				typeof filters.startDate !== 'number' || expense.createAt >= filters.startDate;
			const matchEndDate =
				typeof filters.endDate !== 'number' || expense.createAt <= filters.endDate;
			const matchText = expense.description
				.toLowerCase()
				.includes(filters.text.toLowerCase());

			return matchStartDate && matchEndDate && matchText;
		})
		.sort((fExpense, sExpense) => {
			if (filters.sortBy === 'date') {
				return fExpense.createAt < sExpense.createAt ? 1 : -1;
			} else if (filters.sortBy === 'amount') {
				return fExpense.amount < sExpense.amount ? 1 : -1;
			}
		});
};
