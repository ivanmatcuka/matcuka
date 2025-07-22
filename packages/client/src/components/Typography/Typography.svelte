<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { TailwindColors } from '../../types';

	export type Variant =
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'subtitle1'
		| 'subtitle2'
		| 'body1'
		| 'body2'
		| 'body1-semibold'
		| 'body2-semibold';

	interface Props {
		variant: Variant;
		children: Snippet;
		color?: keyof TailwindColors;
		class?: string;
	}

	const map: Record<Variant, string> = {
		h1: 'sm:text-4xl text-res-4xl font-bold font-main',
		h2: 'sm:text-3xl text-res-3xl font-bold font-main',
		h3: 'sm:text-2xl text-res-2xl font-semibold font-main',
		h4: 'sm:text-xl text-res-xl font-semibold font-main',

		subtitle1: 'sm:text-xl text-res-xl font-mono',
		subtitle2: 'sm:text-md text-res-md font-semibold font-mono',

		body1: 'sm:text-md text-res-md font-mono',
		body2: 'sm:text-sm text-res-sm font-mono',
		'body1-semibold': 'sm:text-md text-res-md font-mono',
		'body2-semibold': 'sm:text-sm text-res-sm font-mono'
	};

	const fontColors: Record<keyof TailwindColors, string> = {
		'accent-100': 'text-accent-100',
		'accent-200': 'text-accent-200',
		'accent-300': 'text-accent-300',
		'accent-400': 'text-accent-400',
		'accent-500': 'text-accent-500',
		'accent-600': 'text-accent-600',
		'accent-700': 'text-accent-700',
		'accent-800': 'text-accent-800',
		'accent-900': 'text-accent-900',

		'neutral-100': 'text-neutral-100',
		'neutral-200': 'text-neutral-200',
		'neutral-300': 'text-neutral-300',
		'neutral-400': 'text-neutral-400',
		'neutral-500': 'text-neutral-500',
		'neutral-600': 'text-neutral-600',
		'neutral-700': 'text-neutral-700',
		'neutral-800': 'text-neutral-800',
		'neutral-900': 'text-neutral-900',
		'neutral-black': 'text-neutral-black',
		'neutral-white': 'text-neutral-white',

		'primary-100': 'text-primary-100',
		'primary-200': 'text-primary-200',
		'primary-300': 'text-primary-300',
		'primary-400': 'text-primary-400',
		'primary-500': 'text-primary-500',
		'primary-600': 'text-primary-600',
		'primary-700': 'text-primary-700',
		'primary-800': 'text-primary-800',
		'primary-900': 'text-primary-900'
	};

	const { variant, color, children, class: customClass = '' }: Props = $props();
</script>

<span class={`${customClass} ${map[variant]} ${color ? fontColors[color] : 'text-inherit'}`}>
	{@render children?.()}
</span>
