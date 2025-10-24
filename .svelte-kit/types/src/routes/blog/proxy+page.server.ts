// @ts-nocheck
import { getPosts } from '$lib/wp';
import type { PageServerLoad } from './$types';

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => {
	try {
		const data = await getPosts(1, 12, fetch);
		return { posts: data.posts };
	} catch (error) {
		return { posts: [] };
	}
};
