<script lang="ts">
	let { children } = $props();
</script>

<section
	class={[
		'm-auto',
		'flex',
		'w-full',
		'flex-col',
		'items-center',
		'gap-10',
		'px-3',
		'py-8',
		'sm:max-w-5xl',
		'md:py-10'
	]}
>
	{@render children()}
</section>
