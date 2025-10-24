// @ts-nocheck
import { getPost } from '$lib/wp';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = async ({ params, fetch }: Parameters<PageServerLoad>[0]) => {
	try {
		const post = await getPost(params.slug, fetch);
		return { post };
	} catch (err) {
		throw error(404, 'Yazı bulunamadı');
	}
};
