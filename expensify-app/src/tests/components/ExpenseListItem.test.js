import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('ExpenseList', () => {
	const expense = {
		...expenses[1],
		id: 'id_element_of_expenses'
	};
	const wrapper = shallow(<ExpenseListItem {...expense} />);
	expect(wrapper).toMatchSnapshot();
});
