<script lang="ts">
	import Tabs from '$components/Tabs/Tabs.svelte';
	import MobileProjects from './MobileProjects.svelte';
	import WebProjects from './WebProjects.svelte';
</script>

<Tabs
	defaultTab="web"
	tabs={[
		{ name: 'web', content: WebProjects },
		{ name: 'mobile', content: MobileProjects }
	]}
/>
