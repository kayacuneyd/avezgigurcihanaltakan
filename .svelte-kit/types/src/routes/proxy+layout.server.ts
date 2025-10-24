// @ts-nocheck
import { getSiteSettings } from '$lib/wp';
import type { LayoutServerLoad } from './$types';

export const load = async ({ fetch }: Parameters<LayoutServerLoad>[0]) => {
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
