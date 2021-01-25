import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE
export const addExpenses = ({ description = '', note = '', amount = 0, createAt = 0 } = {}) => {
	return {
		type: 'ADD_EXPENSE',
		expenses: {
			id: uuidv4(),
			description,
			note,
			amount,
			createAt
		}
	};
};

// REMOVE_EXPENSE
export const removeExpenses = ({ id } = {}) => {
	return {
		type: 'REMOVE_EXPENSE',
		id
	};
};

// EDIT_EXPENSE
export const editExpenses = (id, expense = {}) => {
	return {
		type: 'EDIT_EXPENSE',
		id,
		expense
	};
};
