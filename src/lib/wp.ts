import { PUBLIC_WP_API_URL } from '$env/static/public';

function requireApiUrl() {
	if (!PUBLIC_WP_API_URL) {
		throw new Error('PUBLIC_WP_API_URL is not set. Please add PUBLIC_WP_API_URL to your environment (e.g. .env)');
	}
	return PUBLIC_WP_API_URL;
}

async function doFetchWithRetries(url: string, f: typeof fetch, attempts = 2, delayMs = 400): Promise<Response> {
	let lastErr: any;
	for (let i = 0; i < attempts; i++) {
		try {
			return await f(url);
		} catch (err: any) {
			lastErr = err;
			// small backoff before retrying
			if (i < attempts - 1) {
				await new Promise((r) => setTimeout(r, delayMs));
				delayMs *= 2;
			}
		}
	}
	throw lastErr;
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
	const url = `${api}/custom/v1/pages/${slug}`;
	let response: Response;
	try {
		response = await doFetchWithRetries(url, f);
	} catch (err: any) {
		throw new Error(`Network error fetching page '${slug}' from ${url}: ${err?.message || err}`, { cause: err });
	}

	if (!response.ok) {
		throw new Error(`Failed to fetch page: ${slug} (status ${response.status})`);
	}

	return response.json();
}

/**
 * Fetch all blog posts with pagination
 */
export async function getPosts(page = 1, perPage = 10, fetchFn?: typeof fetch): Promise<WPPostsResponse> {
	const f = fetchFn ?? fetch;
	const api = requireApiUrl();
	const url = `${api}/custom/v1/posts?page=${page}&per_page=${perPage}`;
	let response: Response;
	try {
		response = await doFetchWithRetries(url, f);
	} catch (err: any) {
		throw new Error(`Network error fetching posts from ${url}: ${err?.message || err}`, { cause: err });
	}

	if (!response.ok) {
		throw new Error(`Failed to fetch posts (status ${response.status})`);
	}

	return response.json();
}

/**
 * Fetch a single post by slug
 */
export async function getPost(slug: string, fetchFn?: typeof fetch): Promise<WPPost> {
	const f = fetchFn ?? fetch;
	const api = requireApiUrl();
	const url = `${api}/custom/v1/posts/${slug}`;
	let response: Response;
	try {
		response = await doFetchWithRetries(url, f);
	} catch (err: any) {
		throw new Error(`Network error fetching post '${slug}' from ${url}: ${err?.message || err}`, { cause: err });
	}

	if (!response.ok) {
		throw new Error(`Failed to fetch post: ${slug} (status ${response.status})`);
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
	const url = `${api}/custom/v1/site-settings`;
	let response: Response;
	try {
		response = await doFetchWithRetries(url, f);
	} catch (err: any) {
		throw new Error(`Network error fetching site settings from ${url}: ${err?.message || err}`, { cause: err });
	}

	if (!response.ok) {
		throw new Error(`Failed to fetch site settings (status ${response.status})`);
	}

	return response.json();
}

/**
 * Search posts
 */
export async function searchPosts(query: string, perPage = 10, fetchFn?: typeof fetch): Promise<WPPostsResponse> {
	const f = fetchFn ?? fetch;
	const api = requireApiUrl();
	const url = `${api}/custom/v1/posts?search=${encodeURIComponent(query)}&per_page=${perPage}`;
	let response: Response;
	try {
		response = await doFetchWithRetries(url, f);
	} catch (err: any) {
		throw new Error(`Network error searching posts at ${url}: ${err?.message || err}`, { cause: err });
	}

	if (!response.ok) {
		throw new Error(`Failed to search posts (status ${response.status})`);
	}

	return response.json();
}
