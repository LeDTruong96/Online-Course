import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = (props) => {
	return (
		<Layout>
			<h3>This about page</h3>
			<p>My profile are:</p>
			<Link to={'/contact'}>My Contact</Link>
		</Layout>
	);
};

export { About as default };
