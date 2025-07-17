<script lang="ts">
	import { onMount } from 'svelte';
	import { CMSService, type RenderedProject } from '../services/cmsService';
	import Project from '$components/Project/Project.svelte';

	let projects: RenderedProject[] = $state([]);

	onMount(async () => {
		projects = await CMSService.getProjectsByType('web');
	});
</script>

{#each projects as project}
	<Project title={project.title} description={project.excerpt} imageUrl={project.image} />
{/each}
