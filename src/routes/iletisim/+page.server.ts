import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Redirect to the new German contact route
export const load: PageServerLoad = async () => {
	throw redirect(307, '/kontakt');
};
