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
			bgColor={activeTab === tab.name ? 'neutral-black' : 'neutral-white'}
			textColor={activeTab === tab.name ? 'neutral-white' : 'neutral-black'}
			hoverBgColor={activeTab === tab.name ? 'neutral-black' : 'primary-300'}
			hoverTextColor={activeTab === tab.name ? 'neutral-white' : 'neutral-black'}
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
