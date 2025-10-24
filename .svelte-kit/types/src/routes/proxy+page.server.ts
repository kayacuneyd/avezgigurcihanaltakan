// @ts-nocheck
import { getPosts } from '$lib/wp';
import type { PageServerLoad } from './$types';

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => {
	try {
		const postsData = await getPosts(1, 3, fetch);
        
		return {
			posts: postsData.posts || []
		};
	} catch (error) {
		console.error('Error loading posts:', error);
		return {
			posts: []
		};
	}
};
