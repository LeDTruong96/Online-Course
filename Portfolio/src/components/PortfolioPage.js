import React from 'react';
import { NavLink } from 'react-router-dom';

function PortfolioPage(props) {
	if (!!props.match.params.id) {
		return (
			<div>
				<h1>The thing I've Done</h1>
				<p>This page if for the item with id of {props.match.params.id}</p>
			</div>
		);
	}

	return (
		<div>
			<h1>My Work</h1>
			<p>Checkout the following things I've done</p>
			<NavLink to="/portfolio/1" exact={true}>
				ItemOne
			</NavLink>
			<NavLink to="/portfolio/2" exact={true}>
				ItemTwo
			</NavLink>
		</div>
	);
}

export default PortfolioPage;
