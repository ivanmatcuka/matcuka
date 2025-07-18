import { API } from '../utils/api';
import { PUBLIC_API_URL, PUBLIC_CMS_URL } from '$env/static/public';

export type ProjectResponse = { title: string; excerpt: string; image: Response<{ url: string }> };
export type RenderedProject = { title: string; excerpt: string; image: string };

export type JobResponse = {
	title: string;
	company?: string;
	type: string;
	from: string;
	to?: string;
	location?: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	skills?: Response<{ text: string }>;
};
export type RenderedJob = Omit<
	JobResponse,
	'createdAt' | 'updatedAt' | 'publishedAt' | 'skills'
> & { skills: string[] };

export type ResponseData<T> = { attributes: T; id: number };
export type Response<T> = {
	data: ResponseData<T> | ResponseData<T>[];
	meta?: Record<string, unknown>;
};

const API_BASE_URL = PUBLIC_API_URL;
const CMS_URL = PUBLIC_CMS_URL;

export const cmsService = {
	async getJobs(): Promise<RenderedJob[]> {
		const response = await API.get<Response<JobResponse>>(API_BASE_URL + '/jobs', {
			populate: '*'
		});
		const data = Array.isArray(response?.data) ? response.data : [];

		return data.map(({ attributes }) => {
			const skills = Array.isArray(attributes.skills) ? attributes.skills : attributes.skills?.data;
			const mappedSkills = Array.isArray(skills)
				? skills.map((skill) => skill?.attributes?.text)
				: [];

			return { ...attributes, skills: mappedSkills };
		});
	},

	async getMetadata(): Promise<unknown> {
		const response = await API.get<Response<unknown>>(API_BASE_URL + '/meta', { populate: '*' });
		const data = Array.isArray(response?.data) ? response.data : [];

		return data;
	},

	async getProjectsByType(type: string): Promise<RenderedProject[]> {
		const response = await API.get<Response<ProjectResponse>>(API_BASE_URL + '/projects', {
			'filters[type][$eq]': type,
			populate: '*'
		});

		const data = Array.isArray(response?.data) ? response.data : [];

		return data.map((project) => {
			const image = Array.isArray(project.attributes.image?.data)
				? project.attributes.image.data[0]?.attributes?.url
				: project.attributes.image?.data?.attributes?.url;

			return {
				title: project.attributes.title,
				excerpt: project.attributes.excerpt,
				image: CMS_URL + image
			};
		});
	}
};
