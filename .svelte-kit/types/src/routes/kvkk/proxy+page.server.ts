// @ts-nocheck
import { getPage } from '$lib/wp';
import type { PageServerLoad } from './$types';

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => {
	try {
		const page = await getPage('kvkk', fetch);
		return { page };
	} catch (error) {
		return { page: null };
	}
};
