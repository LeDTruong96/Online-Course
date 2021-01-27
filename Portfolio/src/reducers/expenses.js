// Expense reducers
const expenseReducerDefaultValue = [];

export default (state = expenseReducerDefaultValue, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [ ...state, action.expenses ];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if (expense.id === action.id) {
					return { ...expense, ...action.expense };
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};
