<script lang="ts">
	import Typography from '$components/Typography/Typography.svelte';
	import { formatJobDate } from '$lib/utils';

	export type JobProps = {
		title: string;
		company?: string;
		type: string;
		from: string;
		to?: string;
		location?: string;
	};
	const { title, company, type, from, to, location }: JobProps = $props();

	const fromString = formatJobDate(from);
	const toString = to ? formatJobDate(to) : 'present';
</script>

<div class="relative">
	<Typography variant="subtitle2" color="neutral-white">
		{title}
	</Typography>
	<div class="flex gap-1">
		{#if company}
			<Typography variant="body1" color="accent-300">
				{company}
			</Typography>
		{/if}
		<Typography variant="body1" color="primary-100">
			· {type}
		</Typography>
	</div>
	<div class="flex gap-1">
		<Typography variant="body1" color="primary-100">
			{fromString}-{toString}
		</Typography>
	</div>
	{#if location}
		<div class="flex gap-1">
			<Typography variant="body1" color="primary-100">
				{location}
			</Typography>
		</div>
	{/if}
	<div
		class={[
			'border-primary-100',
			'border',
			'border-[5px]',
			'bg-primary-900',
			'-mb-2',
			'mt-4',
			'h-4',
			'w-4',
			'rounded-full'
		]}
	></div>
</div>
