/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Full-Stack Bootcamp ',
		author: 'Le Duy Truong',
		description: 'gatsby bootcamp'
	},
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		`gatsby-plugin-sharp`,
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false
						}
					}
				]
			}
		}
	]
};
