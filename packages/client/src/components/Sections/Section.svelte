<script lang="ts">
	let { children } = $props();
</script>

<section
	class="m-auto flex w-full max-w-xs flex-col items-center gap-10 py-8 md:py-10 xl:max-w-5xl"
>
	{@render children()}
</section>
