<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = {
		bgColor?: string;
		textColor?: string;
		hoverBgColor?: string;
		hoverTextColor?: string;
		children: Snippet;
	} & HTMLAttributes<HTMLButtonElement>;

	const {
		bgColor = 'bg-primary-900',
		textColor = 'text-neutral-white',
		hoverBgColor = 'hover:bg-neutral-white',
		hoverTextColor = 'hover:text-primary-900',
		children,
		...rest
	}: Props = $props();
</script>

<button
	class={`px-4 py-2 font-main font-semibold ${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor}`}
	{...rest}
>
	{@render children()}
</button>
