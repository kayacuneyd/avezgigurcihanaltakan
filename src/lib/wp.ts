import { PUBLIC_WP_API_URL } from '$env/static/public';

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
export async function getPage(slug: string): Promise<WPPage> {
	const response = await fetch(`${PUBLIC_WP_API_URL}/custom/v1/pages/${slug}`);
	
	if (!response.ok) {
		throw new Error(`Failed to fetch page: ${slug}`);
	}
	
	return response.json();
}

/**
 * Fetch all blog posts with pagination
 */
export async function getPosts(page = 1, perPage = 10): Promise<WPPostsResponse> {
	const response = await fetch(
		`${PUBLIC_WP_API_URL}/custom/v1/posts?page=${page}&per_page=${perPage}`
	);
	
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
	
	return response.json();
}

/**
 * Fetch a single post by slug
 */
export async function getPost(slug: string): Promise<WPPost> {
	const response = await fetch(`${PUBLIC_WP_API_URL}/custom/v1/posts/${slug}`);
	
	if (!response.ok) {
		throw new Error(`Failed to fetch post: ${slug}`);
	}
	
	const data = await response.json();
	return data;
}

/**
 * Fetch site settings
 */
export async function getSiteSettings(): Promise<SiteSettings> {
	const response = await fetch(`${PUBLIC_WP_API_URL}/custom/v1/site-settings`);
	
	if (!response.ok) {
		throw new Error('Failed to fetch site settings');
	}
	
	return response.json();
}

/**
 * Search posts
 */
export async function searchPosts(query: string, perPage = 10): Promise<WPPostsResponse> {
	const response = await fetch(
		`${PUBLIC_WP_API_URL}/custom/v1/posts?search=${encodeURIComponent(query)}&per_page=${perPage}`
	);
	
	if (!response.ok) {
		throw new Error('Failed to search posts');
	}
	
	return response.json();
}
