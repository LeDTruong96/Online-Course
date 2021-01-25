import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import DashboardPage from '../components/Dashboard';
import AddExpensePage from '../components/Add';
import EditExpensePage from '../components/Edit';
import HelpExpensePage from '../components/Help';
import Header from '../components/Header';
import NotFoundPage from '../components/Notfound';

export default function AppRouter() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path={'/'} component={DashboardPage} exact={true} />
					<Route path={'/create'} component={AddExpensePage} exact={true} />
					<Route path={'/edit/:id'} component={EditExpensePage} exact={true} />
					<Route path={'/help'} component={HelpExpensePage} exact={true} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}
