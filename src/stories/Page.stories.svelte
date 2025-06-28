<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Page from '../components/Page.svelte';

	const { Story } = defineMeta({
		title: 'Example/Page',
		component: Page,
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

<Story name="Default" />
