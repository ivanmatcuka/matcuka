<script>
	import {
		PUBLIC_GITHUB_PROFILE_URL,
		PUBLIC_LINKEDIN_PROFILE_URL,
		PUBLIC_CONTACTS_EMAIL
	} from '$env/static/public';

	const LINKEDIN_PROFILE_URL = PUBLIC_LINKEDIN_PROFILE_URL;
	const GITHUB_PROFILE_URL = PUBLIC_GITHUB_PROFILE_URL;
	const CONTACTS_EMAIL = PUBLIC_CONTACTS_EMAIL;

	import GitHub from '../icons/GitHub.svelte';
	import LnikedIn from '../icons/LnikedIn.svelte';
	import Mail from '../icons/Mail.svelte';

	const iconClass = 'hover:text-primary-300 active:text-neutral-white';
</script>

<div class="flex items-center gap-4">
	<a href="mailto:{CONTACTS_EMAIL}" target="_blank" rel="noopener noreferrer">
		<Mail class={`text-primary-100 ${iconClass}`} />
	</a>
	<a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noopener noreferrer">
		<LnikedIn class={`text-primary-100 ${iconClass}`} />
	</a>
	<a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer">
		<GitHub class={`text-primary-100 ${iconClass}`} />
	</a>
</div>
