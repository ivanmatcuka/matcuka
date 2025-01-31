import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{svelte,html,ts}'],
	theme: {
		extend: {
			fontSize: {
				sm: '16px',
				md: '18px',
				xl: '28px',
				'2xl': '40px',
				'3xl': '48px',
				'4xl': '60px',
				inherit: 'inherit'
			},
			fontFamily: {
				mono: "'Azeret Mono'",
				main: 'Poppins'
			},
			colors: {
				'neutral-white': '#fffffa',
				'neutral-900': '#1c1c1c',
				'neutral-600': '#686868',
				'accent-100': '#ffd2e2',
				'accent-200': '#ffa5c5',
				'accent-300': '#ff78a7',
				'accent-400': '#ff4b8a',
				'accent-600': '#e40050',
				'accent-700': '#ab003c',
				'accent-800': '#720028',
				'accent-900': '#390014',
				'neutral-400': '#ced4da',
				'neutral-black': '#030303',
				'neutral-100': '#e6e6e6',
				'neutral-300': '#dee2e6',
				'neutral-200': '#cdcdcd',
				'neutral-3001': '#b3b3b3',
				'neutral-4001': '#9a9a9a',
				'neutral-700': '#4e4e4e',
				'neutral-800': '#353535',
				'primary-100': '#b3ffdd',
				'primary-200': '#66ffba',
				'primary-300': '#1aff98',
				'primary-400': '#00cc70',
				'primary-600': '#006638',
				'primary-700': '#004d2a',
				'primary-800': '#00331c',
				'primary-900': '#001a0e'
			},
			spacing: {}
		}
	}
} satisfies Config;
