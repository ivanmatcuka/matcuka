<script lang="ts">
	import Typography from '$components/Typography/Typography.svelte';
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
		'sm:max-w-5xl',
		'sm:flex-row',
		'sm:justify-between'
	]}
>
	<div>
		<Typography variant="body1" color="accent-200">~/index.html</Typography>
	</div>
	<div class="flex flex-row justify-end gap-3 sm:gap-6">
		<a href="#portfolio">
			<Typography
				variant="body1"
				color="accent-200"
				class={['hover:text-accent-100', 'hover:underline', 'active:text-neutral-white']}
				>portfolio</Typography
			>
		</a>
		<a href="#code" class="hover:underline">
			<Typography
				variant="body1"
				color="accent-200"
				class={['hover:text-accent-100', 'hover:underline', 'active:text-neutral-white']}
				>code</Typography
			>
		</a>
		<a href="#contacts" class="hover:underline">
			<Typography
				variant="body1"
				color="accent-200"
				class={['hover:text-accent-100', 'hover:underline', 'active:text-neutral-white']}
				>contacts</Typography
			>
		</a>
	</div>
</header>
