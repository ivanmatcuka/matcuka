<script lang="ts">
	import { onMount, type Component } from 'svelte';

	import { cmsService, type RenderedJob } from '../services/cmsService';
	import JobCard from '$components/JobCard/JobCard.svelte';
	import Carousel from '$components/Carousel/Carousel.svelte';
	import Typography from '$components/Typography/Typography.svelte';
	import Tag from '$components/Tag/Tag.svelte';

	let jobs: RenderedJob[] = $state([]);
	let activeJobIdxex: number = $state(0);

	const skills = $derived(jobs[activeJobIdxex]?.skills ?? []);

	onMount(async () => {
		jobs = await cmsService.getJobs();
	});
</script>

<div class="flex w-full flex-col">
	<Carousel
		items={jobs.map((job) => ({ props: job, component: JobCard as Component }))}
		onActivate={(index) => (activeJobIdxex = index)}
	/>
</div>

<hr class="border-primary-100 z-10 -mt-10 w-screen border-b-2 border-solid" />

<div
	class={[
		'border-primary-100',
		'flex',
		'w-full',
		'flex-col',
		'items-center',
		'gap-3',
		'whitespace-pre-line',
		'border-2',
		'border-solid',
		'p-2'
	]}
>
	{#if jobs[activeJobIdxex]?.description}
		<Typography variant="body1" color="neutral-white">
			{jobs[activeJobIdxex]?.description}
		</Typography>
	{/if}
	{#if skills}
		<div
			class={[
				'border-primary-100',
				'flex',
				'w-full',
				'flex-wrap',
				'gap-2',
				'border-t-2',
				'border-solid',
				'pt-3'
			]}
		>
			{#each skills as skill}
				<Tag variant="work">{skill.text}</Tag>
			{/each}
		</div>
	{/if}
</div>
