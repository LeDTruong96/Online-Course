import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header>
			<NavLink to={'/'} activeClassName="is-active" exact={true}>
				Go Home page
			</NavLink>
			<NavLink to={'/create'} activeClassName="is-active" exact={true}>
				Go Add page
			</NavLink>
			<NavLink to={'/help'} activeClassName="is-active" exact={true}>
				Go help page
			</NavLink>
		</header>
	);
}

export default Header;
