import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Redirect old Turkish route to the new German route
export const load: PageServerLoad = async () => {
	throw redirect(307, '/ueber-mich');
};
