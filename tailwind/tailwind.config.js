module.exports = {
	mode: 'jit',
	purge: [
		'../*.html'
		// './public/**/*.html'
		// './src/**/*.{js,jsx,ts,tsx,vue}'
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'dark-main': '#18191A',
				'dark-second': '#242526',
				'dark-third': '#3A3B3C',
				'dark-txt': '#B8BBBF'
			}
		}
	},
	variants: {
		extend: {
			display: [ 'group-hover' ],
			transform: [ 'group-hover' ],
			scale: [ 'group-hover' ]
		}
	},
	plugins: []
};
