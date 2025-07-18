<script lang="ts">
	import Tag from '$components/Tag/Tag.svelte';
	import Header from '$components/Header/Header.svelte';
	import Section from '$components/Sections/Section.svelte';
	import Typography from '$components/Typography/Typography.svelte';
	import Button from '$components/Button/Button.svelte';

	import Projects from '../composables/Projects.svelte';
	import CodeCards from '../composables/CodeCards.svelte';
	import Contacts from '../composables/Contacts.svelte';
	import Jobs from '../composables/Jobs.svelte';
	import { onMount } from 'svelte';
	import { cmsService } from '../services/cmsService';

	onMount(async () => {
		const metadata = await cmsService.getMetadata();
		console.log('Metadata:', metadata);
	});
</script>

<div class="bg-primary-900 flex min-h-screen flex-col items-center gap-20 py-10">
	<Header />
	<div class="text-center">
		<div class="flex flex-col items-center gap-4">
			<Typography variant="h1" color="neutral-white">ivan matcuka</Typography>
			<div>
				<Typography variant="subtitle1" color="accent-200">web? mobile? design?</Typography>
				<br />
				<Typography variant="subtitle1" color="accent-200">can do_</Typography>
			</div>
			<Button
				bgColor="bg-primary-300"
				textColor="text-primary-900"
				hoverBgColor="hover:bg-neutral-white"
				hoverTextColor="hover:text-primary-900">Download CV</Button
			>
		</div>
	</div>
	<Section>
		<div class="flex justify-between">
			<div>
				<Typography variant="h4" color="accent-200">brief summary</Typography>
			</div>

			<div class="border-accent-200 basis-[70%] border-l-2 border-solid pl-3">
				<Typography variant="body2" color="accent-100"
					>Experienced full-stack developer, with over 8 years of experience creating dynamic
					websites and applications for various industries.</Typography
				>
				<br />
				<br />
				<Typography variant="body2" color="accent-100"
					>TypeScript is my go-to language for both back-end and front-end development, that allows
					me to create efficient and scalable solutions. Plus, I've got solid skills in PHP, Ruby
					and basic skills in Python.</Typography
				>
			</div>
		</div>
	</Section>
</div>

<div class="bg-primary-100">
	<Section>
		<Typography variant="h2" color="primary-800">education</Typography>
		<div
			class="border-primary-800 flex w-full flex-col items-center gap-3 border-2 border-solid p-3"
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
