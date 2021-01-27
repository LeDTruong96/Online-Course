import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

function AppRoutes() {
	return (
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={HomePage} exact={true} />
					<Route path="/portfolio/:id?" component={PortfolioPage} />
					<Route path="/contact" component={ContactPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default AppRoutes;
