import { API } from '../utils/api';
import { PUBLIC_API_URL, PUBLIC_CMS_URL } from '$env/static/public';

export type MetaResponse = {
	title?: string;
	headline?: string;
	subline?: string;
	summary?: string;
	description?: string;
	cv?: { url: string };
};
export type ProjectResponse = {
	title?: string;
	excerpt?: string;
	image?: { url: string };
};
export type RenderedProject = {
	title?: string;
	excerpt?: string;
	image?: string;
};
export type JobResponse = {
	skills?: unknown[];
};

export type RenderedJob = {
	company?: string;
	description?: string;
	from?: string;
	to?: string;
	title?: string;
	type?: string;
	skills?: unknown[];
};

export type Response<T> = {
	data: T | T[];
	meta?: Record<string, unknown>;
};

const API_BASE_URL = PUBLIC_API_URL;
const CMS_URL = PUBLIC_CMS_URL;

export const cmsService = {
	async getJobs(): Promise<RenderedJob[]> {
		const response = await API.get<Response<JobResponse>>(API_BASE_URL + '/jobs', {
			populate: '*',
			'sort[0]': 'from'
		});

		const data = Array.isArray(response?.data) ? response.data : [];

		return data.map((attributes) => {
			const skills = Array.isArray(attributes.skills) ? attributes.skills : [attributes.skills];
			const mappedSkills = Array.isArray(skills) ? skills.map((skill) => skill) : [];

			return { ...attributes, skills: mappedSkills };
		});
	},

	async getMetadata(): Promise<MetaResponse | undefined> {
		const response = await API.get<Response<MetaResponse>>(API_BASE_URL + '/meta', {
			populate: '*'
		});
		const data = Array.isArray(response?.data) ? response.data[0] : response?.data;

		return data;
	},

	async getProjectsByType(type: string): Promise<RenderedProject[]> {
		const response = await API.get<Response<ProjectResponse>>(API_BASE_URL + '/projects', {
			'filters[type][$eq]': type,
			populate: '*'
		});

		const data = Array.isArray(response?.data) ? response.data : [];

		return data.map((project) => {
			const image = Array.isArray(project.image) ? project.image[0]?.url : project.image?.url;

			return {
				title: project.title,
				excerpt: project.excerpt,
				image: CMS_URL + image
			};
		});
	},

	async downloadCV(): Promise<string> {
		const response = await API.get<Response<MetaResponse>>(API_BASE_URL + '/meta', {
			populate: 'cv'
		});

		const data = Array.isArray(response?.data) ? response.data[0] : response?.data;

		if (data?.cv) {
			const cvUrl = CMS_URL + data.cv.url;
			return cvUrl;
		}

		throw new Error('CV not found');
	}
};
