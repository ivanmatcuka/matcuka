<script lang="ts">
	import Button from '$components/Button/Button.svelte';
	import type { Component } from 'svelte';

	interface Props {
		defaultTab?: string;
		tabs: { name: string; content: Component }[];
	}

	const { tabs, defaultTab }: Props = $props();
	let activeTab: string | null = $state(defaultTab ?? null);
</script>

<div class="flex items-center gap-2">
	{#each tabs as tab}
		<Button
			onclick={() => (activeTab = tab.name)}
			size="sm"
			bgColor={activeTab === tab.name ? 'bg-neutral-black' : 'bg-neutral-white'}
			textColor={activeTab === tab.name ? 'text-neutral-white' : 'text-neutral-black'}
			hoverBgColor={activeTab === tab.name ? 'hover:bg-neutral-black' : 'hover:bg-primary-300'}
			hoverTextColor={activeTab === tab.name
				? 'hover:text-neutral-white'
				: 'hover:text-neutral-black'}
		>
			{tab.name}
		</Button>
	{/each}
</div>

{#each tabs as tab}
	{@const Content = tab.content}

	{#if activeTab === tab.name}
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			<Content />
		</div>
	{/if}
{/each}
