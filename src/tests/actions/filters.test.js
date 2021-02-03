import moment from 'moment';

import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from '../../actions/filters';

test('setTextFilter default value', () => {
	const filter = setTextFilter();

	expect(filter).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});

test('setTextFilter', () => {
	const filter = setTextFilter('setTextFilter');

	expect(filter).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'setTextFilter'
	});
});

test('sortByDate', () => {
	const filter = sortByDate();

	expect(filter).toEqual({
		type: 'SORT_BY_DATE'
	});
});

test('sortByAmount', () => {
	const filter = sortByAmount();

	expect(filter).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});

test('setStartDate', () => {
	const filter = setStartDate(moment(12345));

	expect(filter).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(12345)
	});
});

test('setEndDate', () => {
	const filter = setEndDate(moment(0));

	expect(filter).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});
