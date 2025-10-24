import { getPosts } from '$lib/wp';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const data = await getPosts(1, 12);
		return { posts: data.posts };
	} catch (error) {
		return { posts: [] };
	}
};
