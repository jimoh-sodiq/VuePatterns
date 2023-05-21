/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./docs/.vitepress/**/*.{js,ts,vue}',
		'./docs/**/*.md',
		'./src/**/*.vue',
	],
}