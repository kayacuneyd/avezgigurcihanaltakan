import { getPosts } from '$lib/wp';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const data = await getPosts(1, 12, fetch);
		return { posts: data.posts };
	} catch (error) {
		return { posts: [] };
	}
};
