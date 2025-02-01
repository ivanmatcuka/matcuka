<script lang="ts">
	import Typography from '../Typography/Typography.svelte';
</script>

<header class="bg-primary-500">
	<div
		class="m-auto flex h-[72px] w-full max-w-[1110px] flex-row items-center justify-between px-2"
	>
		<div class="font-bold">
			<Typography variant="body1" text="~/index.html" color="neutral-white" />
		</div>
		<div class="flex flex-row justify-end gap-6 text-neutral-white">
			<a href="/bio" class="hover:underline">
				<Typography variant="body1" text="bio" color="neutral-white" />
			</a>
			<a href="/portfolio" class="hover:underline">
				<Typography variant="body1" text="portfolio" color="neutral-white" />
			</a>
			<a href="/code" class="hover:underline">
				<Typography variant="body1" text="code" color="neutral-white" />
			</a>
			<a href="/contact" class="hover:underline">
				<Typography variant="body1" text="contact" color="neutral-white" />
			</a>
		</div>
	</div>
</header>
