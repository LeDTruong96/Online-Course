import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisiableExpenese from './selectors/expenses';

const store = configureStore();

store.subscribe(() => {
	const { expenses, filters } = store.getState();
	console.log(getVisiableExpenese(expenses, filters));
});

store.dispatch(addExpenses({ description: 'Water bill' }));
store.dispatch(addExpenses({ description: 'Gas sbill' }));
store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

// ReactDOM.render(<AppRouter />, document.getElementById('app'));

const Info = (props) => {
	return (
		<div>
			<h1>Info</h1>
			<p>The info is: {props.info}</p>
		</div>
	);
};

const AuthInfo = (props) => {
	console.log(props);
	return (
		<div>
			{props.isAuth && <p>This is private info, Please don't share!!</p>}
			<Info {...props} />
		</div>
	);
};

ReactDOM.render(
	<AuthInfo isAuth={true} info={'There are the details '} />,
	document.querySelector('#app')
);
