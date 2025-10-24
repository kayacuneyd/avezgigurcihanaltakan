// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Redirect old Turkish route to the new German route
export const load = async () => {
	throw redirect(307, '/dienstleistungen');
};
;null as any as PageServerLoad;