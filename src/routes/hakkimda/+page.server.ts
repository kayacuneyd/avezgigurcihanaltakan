import { getPage } from '$lib/wp';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const page = await getPage('hakkimda');
		return { page };
	} catch (error) {
		console.error('Error loading page:', error);
		return { page: null };
	}
};
