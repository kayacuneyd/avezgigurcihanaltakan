import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { siteSettings } = await parent();
	return { siteSettings };
};
