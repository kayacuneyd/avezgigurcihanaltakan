// @ts-nocheck
import { getPage } from '$lib/wp';
import type { PageServerLoad } from './$types';

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => {
	try {
		const page = await getPage('hakkimda', fetch);
		return { page };
	} catch (error) {
		console.error('Error loading page:', error);
		return { page: null };
	}
};
