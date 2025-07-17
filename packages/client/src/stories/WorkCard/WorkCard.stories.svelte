<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import WorkCard from '../../components/Project/Project.svelte';

	const { Story } = defineMeta({
		title: 'Example/WorkCard',
		component: WorkCard,
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	args={{
		title: 'botspot',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et risus orci. Etiam venenatis, diam.',
		imageUrl: 'https://placehold.co/600x400'
	}}
/>
