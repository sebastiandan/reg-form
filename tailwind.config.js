module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./assets/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				PrimaryBlue: '#004EEF',
				PrimaryViolet: '#8600EF',
				BlueLight: '#E0EAF6',
				Gray: '#76879E',
				GrayLight: '#F6F8FA',
				GrayLightIcon: '#C0CCDA',
				GrayDark: '#333333',
				Green: '#17BA87',
			},
			width: {
				166: '41rem',
			},
			dropShadow: {
				ShadowForm: '0 60px 40px rgba(0, 0, 0, 0.04)',
				ButtonShadow: '0 44px 32px rgba(34, 59, 240, 0.35)',
				SelectShadow: '0 12px 34px rgba(0, 0, 0, 0.16)]',
			},
			borderRadius: {
				16: '16px',
				14: '14px',
				10: '10px',
				7: '7px',
			},
			animation: {
				scaleVert: 'scaleVert 0.6s',
			},
			keyframes: {
				scaleVert: {
					'0% ': {
						transform: 'scaley(1)',
					},
					'50%': {
						transform: 'scaley(4)',
					},
					'100%': {
						transform: 'scaley(1)',
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class',
		}),
	],
}
