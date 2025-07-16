import type { ApiProjectProject } from '../../packages/server/types/generated/contentTypes';
import { API } from '../utils/api';

export type WorkCard = Pick<ApiProjectProject['attributes'], 'title' | 'excerpt' | 'image'>;

export const CMSService = {
	async getWorkCards() {
		return await API.get<WorkCard[]>()('/projects');
	}
};
