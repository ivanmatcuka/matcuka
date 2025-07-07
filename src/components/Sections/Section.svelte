<script lang="ts">
	let { children } = $props();
</script>

<section class="m-auto flex w-full max-w-[1110px] flex-col items-center gap-10 py-8 md:py-10">
	{@render children()}
</section>
