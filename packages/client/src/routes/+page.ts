import { cmsService } from '../services/cmsService';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const metadata = await cmsService.getMetadata();

	return {
		meta: {
			title: metadata?.title,
			description: metadata?.description
		}
	};
};
