import { API } from '../utils/api';
import { PUBLIC_API_URL } from '$env/static/public';

export type RenderedProject = { title: string; excerpt: string; image: string };
export type ProjectResponse = { title: string; excerpt: string; image: Response<{ url: string }> };
export type ResponseData<T> = { attributes: T; id: number };
export type Response<T> = {
	data: ResponseData<T> | ResponseData<T>[];
	meta?: Record<string, unknown>;
};

const API_BASE_URL = PUBLIC_API_URL;

export const CMSService = {
	async getProjects(): Promise<RenderedProject[]> {
		const response = await API.get<Response<ProjectResponse>>('/projects');

		const data = Array.isArray(response?.data) ? response.data : [response?.data];

		return data.map((project) => {
			const image = Array.isArray(project.attributes.image?.data)
				? project.attributes.image.data[0]?.attributes?.url
				: project.attributes.image?.data?.attributes?.url;

			return {
				title: project.attributes.title,
				excerpt: project.attributes.excerpt,
				image: API_BASE_URL + image
			};
		});
	},

	async getProjectsByType(type: string): Promise<RenderedProject[]> {
		const response = await API.get<Response<ProjectResponse>>('/projects', {
			'filters[type][$eq]': type
		});

		const data = Array.isArray(response?.data) ? response.data : [response?.data];

		return data.map((project) => {
			const image = Array.isArray(project.attributes.image?.data)
				? project.attributes.image.data[0]?.attributes?.url
				: project.attributes.image?.data?.attributes?.url;

			return {
				title: project.attributes.title,
				excerpt: project.attributes.excerpt,
				image: API_BASE_URL + image
			};
		});
	}
};
