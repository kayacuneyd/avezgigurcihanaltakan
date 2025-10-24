import { getPosts } from '$lib/wp';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const postsData = await getPosts(1, 3);
		
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
