<script lang="ts">
	import Typography from '$components/Typography/Typography.svelte';
</script>

<header
	class="m-auto flex h-[72px] w-full max-w-[290px] flex-row items-center justify-center px-2 sm:max-w-[1110px] sm:justify-between"
>
	<div class="hidden sm:block">
		<Typography variant="body1" color="accent-200">~/index.html</Typography>
	</div>
	<div class="flex flex-row justify-end gap-3 sm:gap-6">
		<a href="/portfolio" class="hover:underline">
			<Typography variant="body1" color="accent-200">portfolio</Typography>
		</a>
		<a href="/code" class="hover:underline">
			<Typography variant="body1" color="accent-200">code</Typography>
		</a>
		<a href="/contact" class="hover:underline">
			<Typography variant="body1" color="accent-200">contact</Typography>
		</a>
	</div>
</header>
