<script lang="ts">
	export type Font = 'mono' | 'main';
	export type Size = 'sm' | 'md' | 'xl' | '2xl' | '3xl' | '4xl';
	export type Variant =
		| 'h1'
		| 'h2'
		| 'h3'
		| 'subtitle1'
		| 'subtitle2'
		| 'body1-semibold'
		| 'body1'
		| 'body2'
		| 'body2-semibold';

	interface Props {
		text: string;
		variant: Variant;
	}

	const map: Record<Variant, string> = {
		h1: 'text-4xl font-bold font-main',
		h2: 'text-3xl font-bold font-main',
		h3: 'text-2xl font-bold font-main',
		subtitle1: 'text-2xl font-mono',
		subtitle2: 'text-xl font-mono',
		'body1-semibold': 'text-md font-mono',
		body1: 'text-md font-mono',
		body2: 'text-sm font-mono',
		'body2-semibold': 'text-sm font-mono'
	};

	const { variant, text }: Props = $props();
</script>

<span class={map[variant]}>
	{text}
</span>
