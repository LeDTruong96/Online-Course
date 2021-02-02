import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from '../actions/filters';
import 'react-dates/initialize';

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	onFocusChange = (calendarFocused) => {
		console.log(calendarFocused);
		this.setState(() => {
			return { calendarFocused };
		});
	};

	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};

	onSelectSortBy = (e) => {
		if (e.target.value === 'date') {
			this.props.sortByDate();
		} else if (e.target.value === 'amount') {
			this.props.sortByAmount();
		}
	};

	render() {
		return (
			<div>
				<input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
				<select value={this.props.filters.sortBy} onChange={this.onSelectSortBy}>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					startDateId="your_unique_start_date_id"
					endDate={this.props.filters.endDate}
					endDateId="your_unique_end_date_id"
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
					showClearDates={true}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setEndDate: (endDate) => dispatch(setEndDate(endDate)),
		setStartDate: (startDate) => dispatch(setStartDate(startDate)),
		setTextFilter: (e) => dispatch(setTextFilter(e.target.value)),
		sortByDate: () => dispatch(sortByDate()),
		sortByAmount: () => dispatch(sortByAmount())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
