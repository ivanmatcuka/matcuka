<script lang="ts">
	import { onMount } from 'svelte';
	import { cmsService, type RenderedProject } from '../services/cmsService';
	import Project from '$components/Project/Project.svelte';

	let projects: RenderedProject[] = $state([]);

	onMount(async () => {
		projects = await cmsService.getProjectsByType('web');
	});
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	{#each projects as { title, excerpt, image }}
		<Project {title} description={excerpt} imageUrl={image} />
	{/each}
</div>
