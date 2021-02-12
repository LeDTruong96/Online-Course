const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNode, createNodeField } = actions;
	// Transform the new node here and create a new node or
	// create a new node field.
	if (node.internal.type === 'MarkdownRemark') {
		// get name of file
		// can use console.log to see node variable
		const slug = path.basename(node.fileAbsolutePath, '.md');

		//create new node name slug to query by graphQL
		createNodeField({
			node,
			name: 'slug',
			value: slug
		});
	}
};

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogTemplate = path.resolve('./src/templates/blog.js');
	const res = await graphql(`query{allMarkdownRemark{edges{node{fields{slug}}}}}`);

	console.log(blogTemplate);

	res.data.allMarkdownRemark.edges.map((edge) => {
		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug
			}
		});
	});
};
