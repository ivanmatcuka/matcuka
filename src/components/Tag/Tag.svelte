<script lang="ts">
	import Typography from '$components/Typography/Typography.svelte';
	import type { Snippet } from 'svelte';
	import type { TailwindColors } from '../../types';

	type Variant = 'code' | 'education' | 'work';

	const borderColors: Record<Variant, string> = {
		code: 'border-accent-800',
		work: 'border-primary-100',
		education: 'border-primary-900'
	};

	const textColors: Record<Variant, keyof TailwindColors> = {
		code: 'accent-800',
		work: 'primary-100',
		education: 'primary-900'
	};

	interface Props {
		children: Snippet;
		variant: Variant;
	}

	let { children, variant }: Props = $props();
</script>

<div class={`border-2 border-solid px-2 py-1 ${borderColors[variant]}`}>
	<Typography variant="body2" color={textColors[variant]}>
		{@render children()}
	</Typography>
</div>
