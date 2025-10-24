import { getPage } from '$lib/wp';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const page = await getPage('hizmetler');
		return { page };
	} catch (error) {
		return { page: null };
	}
};
