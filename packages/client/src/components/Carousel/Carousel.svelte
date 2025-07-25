<script lang="ts" generics="T">
	import type { Component } from 'svelte';

	let activeIndex: number = $state(0);

	interface Props<T extends Record<string, any> = Record<string, any>> {
		items: { props: T; component: Component<T> }[];
		onActivate: (index: number) => void;
	}

	const { items, onActivate }: Props = $props();
	let refs = $state<HTMLElement[]>([]);
	let containerRef = $state<HTMLDivElement>();
	let offset = $state(0);

	const handleClick = (index: number) => {
		activeIndex = index;
		onActivate(index);
	};

	$effect(() => {
		if (!containerRef || !refs.length) return;

		const lastRef = refs[refs.length - 1];
		const maxOffset = lastRef.offsetLeft - containerRef.clientWidth + lastRef.clientWidth;

		offset = Math.min(maxOffset, refs[activeIndex]?.offsetLeft);
	});
</script>

<div class="relative" bind:this={containerRef}>
	<div class="flex gap-10 transition-transform" style:transform={`translateX(-${offset}px`}>
		{#each [...items] as item, index}
			{@const Component = item.component}

			<button
				class={[
					'min-w-fit text-left',
					{
						'opacity-100': index === activeIndex,
						'opacity-50  hover:opacity-75': index !== activeIndex
					}
				]}
				aria-label={`Select item ${index + 1}`}
				onclick={() => handleClick(index)}
				bind:this={refs[index]}
			>
				<Component {...item.props} />
			</button>
		{/each}
	</div>
</div>
