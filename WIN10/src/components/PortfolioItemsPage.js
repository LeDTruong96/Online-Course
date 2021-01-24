import React from 'react';

function PortfolioItemsPage(props) {
	return (
		<div>
			<h1>The thing I've Done</h1>
			<p>This page if for the item with id of {props.match.params.id}</p>
		</div>
	);
}

export default PortfolioItemsPage;
