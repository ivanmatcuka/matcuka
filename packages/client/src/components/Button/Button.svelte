<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		bgColor?: string;
		textColor?: string;
		hoverBgColor?: string;
		hoverTextColor?: string;
		children: Snippet;
		size?: 'sm' | 'md' | 'lg';
	} & HTMLAttributes<HTMLButtonElement>;

	const {
		bgColor = 'bg-primary-900',
		textColor = 'text-neutral-white',
		hoverBgColor = 'hover:bg-neutral-white',
		hoverTextColor = 'hover:text-primary-900',
		children,
		size = 'md',
		...rest
	}: Props = $props();

	const sizeClasses = {
		sm: 'text-sm px-2 py-1 font-regular',
		md: 'text-base px-4 py-2 font-semibold',
		lg: 'text-lg px-5 py-3 font-semibold'
	};
</script>

<button
	class={`font-mono ${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor} ${sizeClasses[size]}`}
	{...rest}
>
	{@render children()}
</button>
