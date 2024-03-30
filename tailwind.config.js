import formsPlugin from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		fontSize: {
			xs: ['12px', '15px'],
			sm: ['14px', '17px'],
			base: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
		},
		extend: {
			colors: {
				'firm': {
					'orange': '#E28049',
					'gray': '#838383',
				}
			},
			boxShadow: {
				'firm': '0px 0px 10px rgba(70, 70, 70, 0.15)',
			}
		},
	},
	plugins: [
		formsPlugin,
	],
}