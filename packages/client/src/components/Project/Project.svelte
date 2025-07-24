<script lang="ts">
	import Button from '$components/Button/Button.svelte';
	import Typography from '$components/Typography/Typography.svelte';
	import { jc } from '$lib/utils';

	interface Props {
		title: string;
		description: string;
		url: string;
		imageUrl?: string;
	}

	const { title, description, imageUrl, url }: Props = $props();

	const imageClass = jc(['h-[350px]', 'w-full', 'object-cover', 'object-top']);
	const contentClass = jc(['flex', 'flex-col', 'items-center', 'justify-center', 'gap-2', 'p-2']);
	const cardClass = jc([
		'relative',
		'flex',
		'flex-col',
		'border-[2px]',
		'border-solid',
		'border-primary-800',
		'text-center',
		'text-primary-800'
	]);
	const hrClass = jc([
		'relative',
		'box-border',
		'h-0.5',
		'self-stretch',
		'border-t-[2px]',
		'border-solid',
		'border-primary-800'
	]);
</script>

<div class={cardClass}>
	<img class={imageClass} alt="" src={imageUrl} />
	<div class={contentClass}>
		<Typography variant="h3" color="neutral-black" class="!font-medium">
			{title}
		</Typography>
		<hr class={hrClass} />
		<Typography class="text-lg" variant="body1" color="neutral-black">
			{description}
		</Typography>
	</div>
	<Button
		bgColor="neutral-black"
		textColor="neutral-white"
		hoverBgColor="primary-300"
		hoverTextColor="primary-900"
		href={url}
		target="_blank">OPEN</Button
	>
</div>
