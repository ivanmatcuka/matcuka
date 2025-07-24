<script lang="ts">
	import Tag from '$components/Tag/Tag.svelte';
	import Typography from '$components/Typography/Typography.svelte';
	import { jc } from '$lib/utils';
	import Star from '../../icons/Star.svelte';

	interface Props {
		title: string;
		description: string;
		url: string;
		stars?: number;
		tags?: string[];
	}

	const { title, description, stars, tags, url = [] }: Props = $props();

	const cardClass = jc([
		'relative',
		'flex',
		'flex-col',
		'border-[2px]',
		'border-solid',
		'border-accent-800',
		'text-accent-800'
	]);

	const hrClass = jc([
		'relative',
		'box-border',
		'h-0.5',
		'self-stretch',
		'border-t-[2px]',
		'border-solid',
		'border-accent-800'
	]);
</script>

<a href={url} target="_blank" class={cardClass}>
	<div class="flex flex-col gap-2 p-2">
		<div class="flex items-center justify-between">
			<Typography variant="h3" color="accent-800" class="!font-medium">
				{title}
			</Typography>
			{#if stars}
				<div class="flex items-center gap-1">
					<Star />
					<Typography variant="body1" color="accent-800">
						{stars}
					</Typography>
				</div>
			{/if}
		</div>
		<Typography variant="body1" color="accent-800">
			{description}
		</Typography>
		<hr class={hrClass} />
		<div class="flex flex-wrap gap-2">
			{#each tags as tag}
				<Tag variant="code">{tag}</Tag>
			{/each}
		</div>
	</div>
</a>
