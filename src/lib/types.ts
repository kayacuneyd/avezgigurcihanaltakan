export interface MenuItem {
	id: number;
	title: string;
	url: string;
	target?: string;
	children?: MenuItem[];
}

export interface SEOData {
	title: string;
	description: string;
	ogImage?: string;
	canonical?: string;
}

export interface ContactFormData {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
	kvkk_consent: boolean;
}
