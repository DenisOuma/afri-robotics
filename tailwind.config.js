/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"page-bg-color": "#09101D",
				"secondary-color": "#D8261C",
				"primary-hover-effect": "#D8261C",
				"background-color-talent": "#0c2233",

				"primary-font-color": "#75757A",
				"text-color-page": "#fff",
			},
		},
	},
	plugins: [],
};
