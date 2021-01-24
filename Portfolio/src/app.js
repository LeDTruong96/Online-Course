import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

const addExpenses = ({ description = '', note = '', amount = 0, createAt = 0 } = {}) => {
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

const removeExpenses = ({ uuid } = {}) => ({
	type: 'REMOVE_EXPENSE',
	uuid
});

const expenseReducerDefaultValue = [];

const expenseReducer = (state = expenseReducerDefaultValue, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [ ...state, action.expenses ];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.uuid);
		default:
			return state;
	}
};

const filterReducerDefaultValue = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filterReducer = (state = filterReducerDefaultValue, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const store = createStore(
	combineReducers({
		expenses: expenseReducer,
		filters: filterReducer
	})
);

store.subscribe(() => {
	console.log(store.getState());
});

const itemOne = store.dispatch(addExpenses({ description: 'Rent', amount: 100 }));
const itemTwo = store.dispatch(addExpenses({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpenses({ uuid: itemTwo.expenses.id }));

const demoState = {
	expenses: [
		{
			id: 'adasdas',
			description: 'January Rent',
			note: 'This was the final payment for that address',
			amount: 54500,
			createAt: 0
		}
	],
	filters: {
		text: 'rent',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	}
};

// import React from 'react';
// import ReactDOM from 'react-dom';
// import AppRoutes from './routes/AppRoutes';
// import './styles/styles.scss';

// ReactDOM.render(<AppRoutes />, document.getElementById('app'));

// import { createStore } from 'redux';

// const incrementCount = ({ incrementBy = 1 } = {}) => ({
// 	type: 'INCREMENT',
// 	incrementBy
// });

// const decrementCount = ({ decrementBy = 1 } = {}) => ({
// 	type: 'DECREMENT',
// 	decrementBy
// });

// const resetCount = () => ({
// 	type: 'RESET'
// });

// const setCount = ({ count }) => ({
// 	type: 'SET',
// 	count
// });

// const countReducer = (state = { count: 0 }, action) => {
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			return { count: state.count + action.incrementBy };
// 		case 'DECREMENT':
// 			return { count: state.count - action.decrementBy };
// 		case 'SET':
// 			return {
// 				count: action.count
// 			};
// 		case 'RESET':
// 			return { count: 0 };
// 		default:
// 			return state;
// 	}
// };

// const store = createStore(countReducer);

// const unsubsribe = store.subscribe(() => {
// 	console.log(store.getState());
// });

// store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch(incrementCount());

// store.dispatch(resetCount());

// store.dispatch(decrementCount());

// store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch(setCount({ count: 103 }));
