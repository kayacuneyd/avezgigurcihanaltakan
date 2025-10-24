import { getPost } from '$lib/wp';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const post = await getPost(params.slug);
		return { post };
	} catch (err) {
		throw error(404, 'Yazı bulunamadı');
	}
};
