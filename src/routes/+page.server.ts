import { getPosts } from '$lib/wp';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
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
