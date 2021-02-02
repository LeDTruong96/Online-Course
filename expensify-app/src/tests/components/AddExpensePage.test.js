import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addNewExpense, onHistory, wrapper;

beforeEach(() => {
	addNewExpense = jest.fn();
	onHistory = { push: jest.fn() };
	wrapper = shallow(<AddExpensePage addNewExpense={addNewExpense} history={onHistory} />);
});

test('AddExpensePage', () => {
	expect(wrapper).toMatchSnapshot();
});

test('AddExpensePage', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(addNewExpense).toHaveBeenLastCalledWith(expenses[0]);
	expect(onHistory.push).toHaveBeenLastCalledWith('/');
});
