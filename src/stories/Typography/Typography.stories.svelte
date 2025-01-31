<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Typography from './Typography.svelte';

	const { Story } = defineMeta({
		title: 'Example/Typography',
		component: Typography,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: [
					'h1',
					'h2',
					'h3',
					'subtitle1',
					'subtitle2',
					'body1sb',
					'body1',
					'body2',
					'body2sb'
				]
			}
		}
	});
</script>

<Story name="Heading 1" args={{ variant: 'h1', text: 'Heading 1' }} />
<Story name="Heading 2" args={{ variant: 'h2', text: 'Heading 2' }} />
<Story name="Heading 3" args={{ variant: 'h3', text: 'Heading 3' }} />

<Story name="Subtitle 1" args={{ variant: 'subtitle1', text: 'Subtitle 1' }} />
<Story name="Subtitle 2" args={{ variant: 'subtitle2', text: 'Subtitle 2' }} />

<Story name="Body 1 (SemiBold)" args={{ variant: 'body1-semibold', text: 'Body 1 (SemiBold)' }} />
<Story name="Body 1 (Regular)" args={{ variant: 'body1', text: 'Body 1 (Regular)' }} />

<Story name="Body 2 (SemiBold)" args={{ variant: 'body2-semibold', text: 'Body 2 (SemiBold)' }} />
<Story name="Body 2 (Regular)" args={{ variant: 'body2', text: 'Body 2 (Regular)' }} />
