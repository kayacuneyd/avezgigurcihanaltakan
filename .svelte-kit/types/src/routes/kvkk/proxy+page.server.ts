// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Redirect old KVKK route to new German Datenschutz route
export const load = async () => {
	throw redirect(307, '/datenschutz');
};
;null as any as PageServerLoad;