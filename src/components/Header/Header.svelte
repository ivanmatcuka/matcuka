<script lang="ts">
	import Typography from '../Typography/Typography.svelte';
</script>

<header
	class="m-auto flex h-[72px] w-full max-w-[1110px] flex-row items-center justify-between px-2"
>
	<div class="font-bold">
		<Typography variant="body1" text="~/index.html" color="accent-200" />
	</div>
	<div class="flex flex-row justify-end gap-6">
		<a href="/bio" class="hover:underline">
			<Typography variant="body1" text="bio" color="accent-200" />
		</a>
		<a href="/portfolio" class="hover:underline">
			<Typography variant="body1" text="portfolio" color="accent-200" />
		</a>
		<a href="/code" class="hover:underline">
			<Typography variant="body1" text="code" color="accent-200" />
		</a>
		<a href="/contact" class="hover:underline">
			<Typography variant="body1" text="contact" color="accent-200" />
		</a>
	</div>
</header>
