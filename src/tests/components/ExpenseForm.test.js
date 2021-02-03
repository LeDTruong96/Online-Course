import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';

test('ExpenseForm', () => {
	const wrapper = shallow(<ExpenseForm editExpense={expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});

test('ExpenseForm error', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('ExpenseForm description', () => {
	const value = 'New change for jest testing';
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('input').at(0).simulate('change', {
		target: { value: value }
	});
	expect(wrapper.state('description')).toBe(value);
	expect(wrapper).toMatchSnapshot();
});

test('ExpenseForm note change', () => {
	const value = 'New change for jest testing';
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('textarea').at(0).simulate('change', {
		target: { value: value }
	});
	expect(wrapper.state('note')).toBe(value);
	expect(wrapper).toMatchSnapshot();
});

test('ExpenseForm amount change', () => {
	const amountValue = '23.50';
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('input').at(1).simulate('change', {
		target: { value: amountValue }
	});
	expect(wrapper.state('amount')).toBe(amountValue);
	expect(wrapper).toMatchSnapshot();
});

test('ExpenseForm amount change', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('input').at(1).simulate('change', {
		target: { value: '12.22' }
	});
	wrapper.find('input').at(1).simulate('change', {
		target: { value: '12.222323' }
	});
	expect(wrapper.state('amount')).toBe('12.22');
	expect(wrapper).toMatchSnapshot();
});

test('ExpenseForm onSubmit', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm editExpense={expenses[0]} onSubmit={onSubmitSpy} />);
	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: 'Gum',
		note: '',
		amount: 195 * 100,
		createdAt: 0
	});
});

test('ExpenseForm SingleDatePicker', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
});

test('ExpenseForm SingleDatePicker', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused: true });
	expect(wrapper.state('calendarFocused')).toEqual(true);
});
