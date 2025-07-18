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
		d="M37.3333 26.6665C39.455 26.6665 41.4899 27.5094 42.9901 29.0097C44.4904 30.5099 45.3333 32.5448 45.3333 34.6665V43.9998H40V34.6665C40 33.9593 39.719 33.281 39.2189 32.7809C38.7188 32.2808 38.0405 31.9998 37.3333 31.9998C36.626 31.9998 35.9478 32.2808 35.4477 32.7809C34.9476 33.281 34.6666 33.9593 34.6666 34.6665V43.9998H29.3333V34.6665C29.3333 32.5448 30.1761 30.5099 31.6764 29.0097C33.1767 27.5094 35.2116 26.6665 37.3333 26.6665Z"
		stroke="#001A0E"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M24 27.9998H18.6666V43.9998H24V27.9998Z"
		stroke="#001A0E"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M21.3333 23.9998C22.8061 23.9998 24 22.8059 24 21.3332C24 19.8604 22.8061 18.6665 21.3333 18.6665C19.8605 18.6665 18.6666 19.8604 18.6666 21.3332C18.6666 22.8059 19.8605 23.9998 21.3333 23.9998Z"
		stroke="#001A0E"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
