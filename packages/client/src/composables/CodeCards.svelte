<script lang="ts">
	import { onMount } from 'svelte';

	import { githubService, type GithubResponse } from '../services/githubService';
	import CodeCard from '$components/CodeCard/CodeCard.svelte';

	let repos: GithubResponse[] = $state([]);

	onMount(async () => {
		repos = (await githubService.getUserRepos('ivanmatcuka')) ?? [];
	});
</script>

<div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
	{#each repos as { name = '', description = '', stargazers_count = 0, topics, html_url = '#' }}
		<CodeCard title={name} {description} stars={stargazers_count} tags={topics} url={html_url} />
	{/each}
</div>
