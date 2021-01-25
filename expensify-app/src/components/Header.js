import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header>
			<h1>Expensify</h1>
			<NavLink to={'/'} activeClassName="is-active" exact={true}>
				Dashboard
			</NavLink>
			<NavLink to={'/create'} activeClassName="is-active" exact={true}>
				Create Expense
			</NavLink>
			<NavLink to={'/help'} activeClassName="is-active" exact={true}>
				Help
			</NavLink>
		</header>
	);
}

export default Header;
