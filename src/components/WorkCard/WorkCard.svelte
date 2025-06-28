<script lang="ts">
	interface Props {
		title: string;
		description: string;
		imageUrl: string;
	}

	const { title, description, imageUrl }: Props = $props();
</script>

<div
	class="text-21xl font-heading-3 relative box-border flex w-full min-w-[290px] flex-col items-center justify-center border-[2px] border-solid border-primary-800 text-center text-primary-800"
>
	<img class="h-[350px] w-full object-cover" alt="" src={imageUrl} />
	<div class="flex flex-col items-center justify-center gap-4 self-stretch overflow-hidden p-4">
		<div class="relative font-medium leading-[48px]">{title}</div>
		<hr
			class="relative box-border h-0.5 self-stretch border-t-[2px] border-solid border-primary-800"
		/>
		<div class="font-body-1-medium relative self-stretch text-lg font-medium leading-[28px]">
			{description}
		</div>
	</div>
</div>
