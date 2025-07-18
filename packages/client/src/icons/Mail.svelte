<script lang="ts">
	interface Props {
		class?: string;
	}
	const { class: className = '' }: Props = $props();
</script>

<svg
	width="64"
	height="64"
	viewBox="0 0 64 64"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={className}
>
	<rect width="64" height="64" rx="32" fill="currentColor" />
	<path
		d="M45.3333 24.0002C45.3333 22.5335 44.1333 21.3335 42.6666 21.3335H21.3333C19.8666 21.3335 18.6666 22.5335 18.6666 24.0002M45.3333 24.0002V40.0002C45.3333 41.4668 44.1333 42.6668 42.6666 42.6668H21.3333C19.8666 42.6668 18.6666 41.4668 18.6666 40.0002V24.0002M45.3333 24.0002L32 33.3335L18.6666 24.0002"
		stroke="#001A0E"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
