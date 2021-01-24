import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header>
			<h1>Portfolio</h1>
			<NavLink to="/" exact={true}>
				Home
			</NavLink>
			<NavLink to={'/portfolio'}>Portfolio</NavLink>
			<NavLink to={'/contact'}>Contact</NavLink>
		</header>
	);
}

export default Header;
