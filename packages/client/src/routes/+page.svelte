<script lang="ts">
	import Tag from '$components/Tag/Tag.svelte';
	import Header from '$components/Header/Header.svelte';
	import Section from '$components/Sections/Section.svelte';
	import Typography from '$components/Typography/Typography.svelte';

	import Projects from '../composables/Projects.svelte';
	import CodeCards from '../composables/CodeCards.svelte';
	import Contacts from '../composables/Contacts.svelte';
	import Jobs from '../composables/Jobs.svelte';
	import Head from '../composables/Head.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta name="description" content={data.meta.description} />
</svelte:head>

<div class="bg-primary-900 flex min-h-screen flex-col items-center gap-10 py-5 sm:gap-20 sm:py-10">
	<Header />
	<Head />
</div>

<div class="bg-primary-100">
	<Section>
		<Typography variant="h2" color="primary-800">education</Typography>
		<div
			class="border-primary-800 flex w-full flex-col items-center gap-3 border-2 border-solid p-3 text-center"
		>
			<Typography variant="subtitle1" color="primary-800"
				>bachelor of applied informatics</Typography
			>
			<Typography variant="h3" color="primary-800"
				>russian state university for the humanities</Typography
			>
			<Typography variant="subtitle2" color="primary-800">2015-2019</Typography>
			<Typography variant="body1" color="primary-800">
				During my 4 year bachelor program I got to learn some of the most popular compiled
				programming languages such as Java, C# and C++; basics of computer graphics; linear algebra;
				etc.During my 4 year bachelor program I got to learn some of the most popular compiled
				programming languages such as Java, C# and C++; basics of computer graphics; linear algebra;
				etc.
			</Typography>
			<div class="border-primary-800 flex w-full flex-wrap gap-2 border-t-2 border-solid pt-3">
				<Tag variant="education">C++</Tag>
				<Tag variant="education">C#</Tag>
				<Tag variant="education">Java</Tag>
				<Tag variant="education">Linear Algebra</Tag>
				<Tag variant="education">Relational Databases</Tag>
			</div>
		</div>
	</Section>
</div>

<div class="bg-primary-900 overflow-x-hidden">
	<Section>
		<Typography variant="h2" color="primary-100">previous jobs</Typography>
		<Jobs />
	</Section>
</div>

<div class="bg-neutral-white">
	<Section>
		<Typography variant="h2" color="neutral-black">my work</Typography>
		<Projects />
	</Section>
</div>

<div class="bg-accent-100">
	<Section>
		<Typography variant="h2" color="accent-800">my code</Typography>
		<CodeCards />
	</Section>
</div>

<div class="bg-primary-900">
	<Section>
		<Typography variant="h2" color="primary-100">contacts</Typography>
		<Contacts />
	</Section>
</div>
