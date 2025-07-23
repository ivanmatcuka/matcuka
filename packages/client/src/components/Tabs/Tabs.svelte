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
		{@const isActive = activeTab === tab.name}
		<Button
			onclick={() => (activeTab = tab.name)}
			size="sm"
			bgColor={isActive ? 'neutral-black' : 'neutral-white'}
			textColor={isActive ? 'neutral-white' : 'neutral-black'}
			hoverBgColor={isActive ? 'neutral-black' : 'primary-300'}
			hoverTextColor={isActive ? 'neutral-white' : 'neutral-black'}
		>
			{tab.name}
		</Button>
	{/each}
</div>

{#each tabs as tab}
	{@const Content = tab.content}

	{#if activeTab === tab.name}
		<Content />
	{/if}
{/each}
