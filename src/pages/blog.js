import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';

const Blog = (props) => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<p>This is my blog page</p>
			<ol>
				{data.allMarkdownRemark.edges.map((edge) => {
					return (
						<li key={edge.node.frontmatter.date}>
							<Link to={`/blog/${edge.node.fields.slug}`}>
								<h2>{edge.node.frontmatter.title}</h2>
								<p>{edge.node.frontmatter.date}</p>
							</Link>
						</li>
					);
				})}
			</ol>
		</Layout>
	);
};

export { Blog as default };
