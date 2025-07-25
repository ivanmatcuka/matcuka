<script lang="ts">
	import Typography from '$components/Typography/Typography.svelte';

	const linkClass = 'hover:text-accent-100 active:text-neutral-white hover:underline';
</script>

<header
	class={[
		'm-auto',
		'flex',
		'h-[72px]',
		'w-full',
		'max-w-xs',
		'flex-col',
		'items-center',
		'justify-center',
		'px-2',
		'gap-2',
		'sm:max-w-5xl',
		'sm:flex-row',
		'sm:justify-between'
	]}
>
	<a href="/">
		<Typography variant="body1" color="accent-200" class={linkClass}>~/index.html</Typography>
	</a>
	<div class="flex flex-row justify-end gap-3 sm:gap-6">
		<a href="#portfolio">
			<Typography variant="body1" color="accent-200" class={linkClass}>portfolio</Typography>
		</a>
		<a href="#code">
			<Typography variant="body1" color="accent-200" class={linkClass}>code</Typography>
		</a>
		<a href="#contacts">
			<Typography variant="body1" color="accent-200" class={linkClass}>contacts</Typography>
		</a>
	</div>
</header>
