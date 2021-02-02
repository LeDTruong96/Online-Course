import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, match, wrapper;

beforeEach(() => {
	editExpense = jest.fn();
	removeExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			editExpense={editExpense}
			history={history}
			match={match}
			expense={expenses[0]}
			removeExpense={removeExpense}
		/>
	);
});

test('EditExpensePage match the snapshot', () => {
	expect(wrapper).toMatchSnapshot();
});

test('EditExpensePage edit expense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0].id, expenses[0]);
	expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
	expect(history.push).toHaveBeenLastCalledWith('/');
});

test('EditExpensePage edit expense', () => {
	wrapper.find('button').simulate('click');
	expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
});
