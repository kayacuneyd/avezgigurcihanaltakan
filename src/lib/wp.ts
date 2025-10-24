import { PUBLIC_WP_API_URL } from '$env/static/public';

function requireApiUrl() {
	if (!PUBLIC_WP_API_URL) {
		throw new Error('PUBLIC_WP_API_URL is not set. Please add PUBLIC_WP_API_URL to your environment (e.g. .env)');
	}
	return PUBLIC_WP_API_URL;
}

export interface WPPage {
	id: number;
	title: string;
	slug: string;
	content: string;
	excerpt: string;
	featured_image: string | null;
	seo: {
		title: string;
		description: string;
		og_image: string | null;
	};
}

export interface WPPost {
	id: number;
	title: string;
	slug: string;
	excerpt: string;
	content: string;
	date: string;
	modified: string;
	author: string;
	featured_image: string | null;
	categories: Array<{
		id: number;
		name: string;
		slug: string;
	}>;
	tags: Array<{
		id: number;
		name: string;
		slug: string;
	}>;
}

export interface WPPostsResponse {
	posts: WPPost[];
	total: number;
	pages: number;
	current_page: number;
}

export interface SiteSettings {
	site_name: string;
	site_description: string;
	phone: string;
	email: string;
	address: string;
	working_hours: string;
	social_media: {
		linkedin: string;
		twitter: string;
		instagram: string;
	};
}

/**
 * Fetch a single page by slug
 */
// Note: site page slugs are now German (e.g. 'ueber-mich', 'dienstleistungen', 'kontakt', 'datenschutz').
// The `slug` parameter itself is unchanged in the function signature — callers should pass the
// localized slug when requesting pages.
export async function getPage(slug: string, fetchFn?: typeof fetch): Promise<WPPage> {
	const f = fetchFn ?? fetch;
	const api = requireApiUrl();
	const response = await f(`${api}/custom/v1/pages/${slug}`);
    
	if (!response.ok) {
		throw new Error(`Failed to fetch page: ${slug}`);
	}
    
	return response.json();
}

/**
 * Fetch all blog posts with pagination
 */
export async function getPosts(page = 1, perPage = 10, fetchFn?: typeof fetch): Promise<WPPostsResponse> {
	const f = fetchFn ?? fetch;
	const api = requireApiUrl();
	const response = await f(
		`${api}/custom/v1/posts?page=${page}&per_page=${perPage}`
	);
    
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
    
	return response.json();
}

/**
 * Fetch a single post by slug
 */
export async function getPost(slug: string, fetchFn?: typeof fetch): Promise<WPPost> {
	const f = fetchFn ?? fetch;
	const api = requireApiUrl();
	const response = await f(`${api}/custom/v1/posts/${slug}`);
    
	if (!response.ok) {
		throw new Error(`Failed to fetch post: ${slug}`);
	}
    
	const data = await response.json();
	return data;
}

/**
 * Fetch site settings
 */
export async function getSiteSettings(fetchFn?: typeof fetch): Promise<SiteSettings> {
	const f = fetchFn ?? fetch;
	const api = requireApiUrl();
	const response = await f(`${api}/custom/v1/site-settings`);
    
	if (!response.ok) {
		throw new Error('Failed to fetch site settings');
	}
    
	return response.json();
}

/**
 * Search posts
 */
export async function searchPosts(query: string, perPage = 10, fetchFn?: typeof fetch): Promise<WPPostsResponse> {
	const f = fetchFn ?? fetch;
	const api = requireApiUrl();
	const response = await f(
		`${api}/custom/v1/posts?search=${encodeURIComponent(query)}&per_page=${perPage}`
	);
    
	if (!response.ok) {
		throw new Error('Failed to search posts');
	}
    
	return response.json();
}
