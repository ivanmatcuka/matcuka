<script lang="ts">
	import Typography from '$components/Typography/Typography.svelte';

	export type JobProps = {
		title: string;
		company?: string;
		type: string;
		from: string;
		to?: string;
		location?: string;
	};
	const { title, company, type, from, to, location }: JobProps = $props();

	const fromDate = new Date(from);
	const toDate = to ? new Date(to) : null;
	const formattedFrom = fromDate
		.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
		.toLowerCase();
	const formattedTo = toDate
		?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
		.toLowerCase();
</script>

<div class="">
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
			{formattedFrom}{` — ${formattedTo || 'present'}`}
		</Typography>
	</div>
	{#if location}
		<div class="flex gap-1">
			<Typography variant="body1" color="primary-100">
				{location}
			</Typography>
		</div>
	{/if}
</div>
