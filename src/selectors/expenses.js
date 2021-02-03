// Get visible expenses
import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter((expense) => {
			const createAt = moment(expense.createdAt);
			const startDateMatch = !!startDate ? createAt.isSameOrAfter(startDate) : true;
			const endDateMatch = !!endDate ? createAt.isSameOrBefore(endDate) : true;
			const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'amount') {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};
