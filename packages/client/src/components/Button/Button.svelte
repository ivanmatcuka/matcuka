<script lang="ts">
	import Typography from '$components/Typography/Typography.svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { TailwindColors } from '../../types';

	type Props = {
		bgColor: keyof TailwindColors;
		textColor: keyof TailwindColors;
		hoverBgColor: keyof TailwindColors;
		hoverTextColor: keyof TailwindColors;
		children: Snippet;
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		target?: string;
	} & HTMLAttributes<HTMLButtonElement> &
		HTMLAttributes<HTMLAnchorElement>;

	const {
		bgColor,
		textColor,
		hoverBgColor,
		hoverTextColor,
		href,
		size = 'md',
		children,
		...rest
	}: Props = $props();

	const bgColorClasses: Record<keyof TailwindColors, string> = {
		'accent-100': 'bg-accent-100',
		'accent-200': 'bg-accent-200',
		'accent-300': 'bg-accent-300',
		'accent-400': 'bg-accent-400',
		'accent-500': 'bg-accent-500',
		'accent-600': 'bg-accent-600',
		'accent-700': 'bg-accent-700',
		'accent-800': 'bg-accent-800',
		'accent-900': 'bg-accent-900',

		'primary-100': 'bg-primary-100',
		'primary-200': 'bg-primary-200',
		'primary-300': 'bg-primary-300',
		'primary-400': 'bg-primary-400',
		'primary-500': 'bg-primary-500',
		'primary-600': 'bg-primary-600',
		'primary-700': 'bg-primary-700',
		'primary-800': 'bg-primary-800',
		'primary-900': 'bg-primary-900',

		'neutral-100': 'bg-neutral-100',
		'neutral-200': 'bg-neutral-200',
		'neutral-300': 'bg-neutral-300',
		'neutral-400': 'bg-neutral-400',
		'neutral-500': 'bg-neutral-500',
		'neutral-600': 'bg-neutral-600',
		'neutral-700': 'bg-neutral-700',
		'neutral-800': 'bg-neutral-800',
		'neutral-900': 'bg-neutral-900',
		'neutral-black': 'bg-neutral-black',
		'neutral-white': 'bg-neutral-white'
	};

	const hoverBgColorClasses: Record<keyof TailwindColors, string> = {
		'accent-100': 'hover:bg-accent-100',
		'accent-200': 'hover:bg-accent-200',
		'accent-300': 'hover:bg-accent-300',
		'accent-400': 'hover:bg-accent-400',
		'accent-500': 'hover:bg-accent-500',
		'accent-600': 'hover:bg-accent-600',
		'accent-700': 'hover:bg-accent-700',
		'accent-800': 'hover:bg-accent-800',
		'accent-900': 'hover:bg-accent-900',

		'primary-100': 'hover:bg-primary-100',
		'primary-200': 'hover:bg-primary-200',
		'primary-300': 'hover:bg-primary-300',
		'primary-400': 'hover:bg-primary-400',
		'primary-500': 'hover:bg-primary-500',
		'primary-600': 'hover:bg-primary-600',
		'primary-700': 'hover:bg-primary-700',
		'primary-800': 'hover:bg-primary-800',
		'primary-900': 'hover:bg-primary-900',

		'neutral-100': 'hover:bg-neutral-100',
		'neutral-200': 'hover:bg-neutral-200',
		'neutral-300': 'hover:bg-neutral-300',
		'neutral-400': 'hover:bg-neutral-400',
		'neutral-500': 'hover:bg-neutral-500',
		'neutral-600': 'hover:bg-neutral-600',
		'neutral-700': 'hover:bg-neutral-700',
		'neutral-800': 'hover:bg-neutral-800',
		'neutral-900': 'hover:bg-neutral-900',
		'neutral-black': 'hover:bg-neutral-black',
		'neutral-white': 'hover:bg-neutral-white'
	};

	const textColorClasses: Record<keyof TailwindColors, string> = {
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

	const hoverTextColorClasses: Record<keyof TailwindColors, string> = {
		'accent-100': 'hover:text-accent-100',
		'accent-200': 'hover:text-accent-200',
		'accent-300': 'hover:text-accent-300',
		'accent-400': 'hover:text-accent-400',
		'accent-500': 'hover:text-accent-500',
		'accent-600': 'hover:text-accent-600',
		'accent-700': 'hover:text-accent-700',
		'accent-800': 'hover:text-accent-800',
		'accent-900': 'hover:text-accent-900',

		'neutral-100': 'hover:text-neutral-100',
		'neutral-200': 'hover:text-neutral-200',
		'neutral-300': 'hover:text-neutral-300',
		'neutral-400': 'hover:text-neutral-400',
		'neutral-500': 'hover:text-neutral-500',
		'neutral-600': 'hover:text-neutral-600',
		'neutral-700': 'hover:text-neutral-700',
		'neutral-800': 'hover:text-neutral-800',
		'neutral-900': 'hover:text-neutral-900',
		'neutral-black': 'hover:text-neutral-black',
		'neutral-white': 'hover:text-neutral-white',

		'primary-100': 'hover:text-primary-100',
		'primary-200': 'hover:text-primary-200',
		'primary-300': 'hover:text-primary-300',
		'primary-400': 'hover:text-primary-400',
		'primary-500': 'hover:text-primary-500',
		'primary-600': 'hover:text-primary-600',
		'primary-700': 'hover:text-primary-700',
		'primary-800': 'hover:text-primary-800',
		'primary-900': 'hover:text-primary-900'
	};

	const sizeClasses = {
		sm: 'px-2 py-1 font-regular',
		md: 'px-4 py-2 font-semibold',
		lg: 'px-5 py-3 font-semibold'
	};

	const classes = $derived([
		bgColorClasses[bgColor],
		textColorClasses[textColor],
		hoverTextColorClasses[hoverTextColor],
		hoverBgColorClasses[hoverBgColor],
		sizeClasses[size]
	]);
</script>

{#if href}
	<a class={classes} {href} {...rest}>
		<Typography variant="body2">
			{@render children()}</Typography
		>
	</a>
{:else}
	<button class={classes} {...rest}>
		<Typography variant="body2">
			{@render children()}</Typography
		>
	</button>
{/if}
