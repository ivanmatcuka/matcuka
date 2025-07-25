<script lang="ts">
	import Section from '$components/Sections/Section.svelte';
	import Typography from '$components/Typography/Typography.svelte';
	import Button from '$components/Button/Button.svelte';
	import { onMount } from 'svelte';
	import { cmsService, type MetaResponse } from '../services/cmsService';
	import { downloadFileFromBlob } from '../utils/download';
	import { PUBLIC_CV_FILENAME } from '$env/static/public';

	const CV_FILENAME = PUBLIC_CV_FILENAME;

	let metadata = $state<MetaResponse | null>(null);

	onMount(async () => (metadata = await cmsService.getMetadata()));

	const downloadCV = async () => {
		const response = await cmsService.getCvUrl();

		if (response) {
			downloadFileFromBlob(response, CV_FILENAME);
		}
	};
</script>

<div class="text-center">
	<div class="flex flex-col items-center gap-4">
		{#if metadata}
			{@const { title, headline, subline } = metadata}

			<Typography variant="h1" color="neutral-white">{title}</Typography>
			<div>
				<Typography variant="subtitle1" color="accent-200">{headline}</Typography>
				<br />
				<Typography variant="subtitle1" color="accent-200">{subline}</Typography>
			</div>
		{/if}
		<Button
			bgColor="primary-300"
			textColor="primary-900"
			hoverBgColor="primary-100"
			hoverTextColor="primary-900"
			onclick={downloadCV}>Download CV</Button
		>
	</div>
</div>

{#if metadata?.summary}
	<Section>
		<div class="flex flex-col justify-between gap-4 sm:flex-row">
			<div>
				<Typography variant="h4" color="accent-200">brief summary</Typography>
			</div>

			<div class="border-accent-200 basis-[70%] border-l-2 border-solid pl-3">
				<Typography variant="body2" color="accent-100" class="whitespace-pre-line"
					>{metadata.summary}</Typography
				>
			</div>
		</div>
	</Section>
{/if}
