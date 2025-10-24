import { getSiteSettings } from '$lib/wp';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	try {
		const siteSettings = await getSiteSettings();
		
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
