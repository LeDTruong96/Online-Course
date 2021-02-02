import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import expenses from '../fixtures/expenses';
import moment from 'moment';

let wrapper, setEndDate, setStartDate, setTextFilter, sortByDate, sortByAmount;

const filters = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const altFilters = {
	text: '',
	sortBy: 'date',
	startDate: moment().startOf('month'),
	endDate: moment().endOf('month')
};

beforeEach(() => {
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();

	wrapper = shallow(
		<ExpenseListFilters
			setStartDate={setStartDate}
			setEndDate={setEndDate}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			filters={filters}
		/>
	);
});

test('ExpenseList', () => {
	expect(wrapper).toMatchSnapshot();
});

test('ExpenseList alt filters', () => {
	wrapper.setProps({
		filters: altFilters
	});
	expect(wrapper).toMatchSnapshot();
});

test('onDatesChange startDate', () => {
	wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
		startDate: 10,
		endDate: 20
	});
	expect(setStartDate).toHaveBeenLastCalledWith(10);
});

test('onDatesChange endDate', () => {
	wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
		startDate: 10,
		endDate: 20
	});
	expect(setEndDate).toHaveBeenLastCalledWith(20);
});

test('onTextChange', () => {
	wrapper.find('input').at(0).simulate('change', {
		target: { value: 'OK Men' }
	});
	expect(setTextFilter).toHaveBeenLastCalledWith('OK Men');
});

test('sortByDate', () => {
	wrapper.find('select').at(0).simulate('change', {
		target: { value: 'date' }
	});
	expect(sortByDate).toHaveBeenCalled();
});

test('sortByAmount', () => {
	wrapper.find('select').at(0).simulate('change', {
		target: { value: 'amount' }
	});
	expect(sortByAmount).toHaveBeenCalled();
});

test('onFocusChange startDate', () => {
	wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('startDate');
	expect(wrapper.state('calendarFocused')).toBe('startDate');
});

test('onFocusChange endDate', () => {
	wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('endDate');
	expect(wrapper.state('calendarFocused')).toBe('endDate');
});
