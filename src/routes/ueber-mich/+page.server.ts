import { getPage } from '$lib/wp';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        const page = await getPage('ueber-mich', fetch);
        return { page };
    } catch (error) {
        console.error('Error loading page:', error);
        return { page: null };
    }
};
