/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*"],
	theme: {
		extend: {
			colors: {
				"color-light": "#EEEDDE",
				"color-dark": "#203239",
				"color-secondary": "#FF7527",
			},

			fontFamily: {
				main: "'Poppins', sans-serif;",
			},

			container: {
				center: true,
			},
		},
	},
	plugins: [],
};
