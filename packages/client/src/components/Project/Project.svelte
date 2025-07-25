<script lang="ts">
	import Button from '$components/Button/Button.svelte';
	import Typography from '$components/Typography/Typography.svelte';

	interface Props {
		title: string;
		description: string;
		url: string;
		imageUrl?: string;
	}

	const { title, description, imageUrl, url }: Props = $props();
</script>

<div
	class={[
		'relative',
		'flex',
		'flex-col',
		'border-[2px]',
		'border-solid',
		'border-primary-800',
		'text-center',
		'text-primary-800'
	]}
>
	<img class={['h-[350px]', 'w-full', 'object-cover', 'object-top']} alt="" src={imageUrl} />
	<div class={['flex', 'flex-col', 'flex-1', 'items-center', 'justify-start', 'gap-2', 'p-2']}>
		<Typography variant="h3" color="neutral-black" class="!font-medium">
			{title}
		</Typography>
		<hr
			class={[
				'relative',
				'box-border',
				'h-0.5',
				'self-stretch',
				'border-t-[2px]',
				'border-solid',
				'border-primary-800'
			]}
		/>
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
