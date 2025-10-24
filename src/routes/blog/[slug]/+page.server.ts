import { getPost } from '$lib/wp';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	try {
		const post = await getPost(params.slug, fetch);
		return { post };
	} catch (err) {
		throw error(404, 'Yazı bulunamadı');
	}
};
