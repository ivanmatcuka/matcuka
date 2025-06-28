<script>
	import Header from '../components/Header/Header.svelte';
	import Section from '../components/Sections/Section.svelte';
	import Typography from '../components/Typography/Typography.svelte';
</script>

<div class="flex flex-col items-center gap-20 bg-primary-900 py-10">
	<Header />
	<div class="text-center">
		<Typography variant="h1" text="ivan matcuka" color="neutral-white" />
		<div>
			<Typography variant="subtitle1" color="accent-200" text="web? mobile? design?" />
			<Typography variant="subtitle1" color="accent-200" text="can do_" />
		</div>
	</div>
</div>

<div class="bg-primary-100">
	<Section>
		<Typography variant="h2" text="education" color="primary-800" />
	</Section>
</div>

<div class="bg-primary-900">
	<Section>
		<Typography variant="h2" text="previous jobs" color="primary-100" />
	</Section>
</div>

<div class="bg-neutral-white">
	<Section>
		<Typography variant="h2" text="my work" color="primary-700" />
	</Section>
</div>

<div class="bg-accent-100">
	<Section>
		<Typography variant="h2" text="my code" color="accent-800" />
	</Section>
</div>

<div class="bg-primary-900">
	<Section>
		<Typography variant="h2" text="contacts" color="primary-100" />
	</Section>
</div>
