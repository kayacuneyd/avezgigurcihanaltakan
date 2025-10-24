import { getSiteSettings } from '$lib/wp';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	try {
		const siteSettings = await getSiteSettings(fetch);
        
		return {
			siteSettings
		};
	} catch (error) {
		console.error('Error loading site settings:', error);
		return {
			siteSettings: null
		};
	}
};
