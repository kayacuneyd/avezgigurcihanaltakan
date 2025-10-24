import { getPage } from '$lib/wp';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        const page = await getPage('dienstleistungen', fetch);
        return { page };
    } catch (error) {
        return { page: null };
    }
};
