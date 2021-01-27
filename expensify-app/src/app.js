import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();

store.dispatch(addExpenses({ description: 'Water bill', amount: 1000, createAt: 300 }));
store.dispatch(addExpenses({ description: 'Electronic bill', amount: 3000, createAt: 200 }));
store.dispatch(addExpenses({ description: 'Gas bill', amount: 2000, createAt: 100 }));

store.dispatch(setTextFilter('water'));

setTimeout(() => {
	store.dispatch(setTextFilter('bill'));
}, 1000);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
