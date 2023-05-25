/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	important: true,
	content: [
		'./docs/.vitepress/**/*.{js,ts,vue}',
		'./docs/**/*.md',
		'./src/**/*.vue',
	],
}