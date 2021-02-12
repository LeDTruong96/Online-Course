import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import headerStyles from './header.module.scss';

const Header = (props) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					author
				}
			}
		}
	`);

	return (
		<div className={headerStyles.header}>
			<h3>
				<Link to="/" className={headerStyles.title}>
					{/* Gatsby Bootcamp */}
					{data.site.siteMetadata.title}
					{data.site.siteMetadata.author}
				</Link>
			</h3>

			<nav>
				<ul className={headerStyles.navList}>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.navItemActive}
							to="/"
						>
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.navItemActive}
							to="/about"
						>
							about
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.navItemActive}
							to="/blog"
						>
							blog
						</Link>
					</li>
					<li>
						<Link
							className={headerStyles.navItem}
							activeClassName={headerStyles.navItemActive}
							to="/contact"
						>
							contact
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export { Header as default };
