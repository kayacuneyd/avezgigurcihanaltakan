
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/blog" | "/blog/[slug]" | "/hakkimda" | "/hizmetler" | "/iletisim" | "/kvkk";
		RouteParams(): {
			"/blog/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/blog": { slug?: string };
			"/blog/[slug]": { slug: string };
			"/hakkimda": Record<string, never>;
			"/hizmetler": Record<string, never>;
			"/iletisim": Record<string, never>;
			"/kvkk": Record<string, never>
		};
		Pathname(): "/" | "/blog" | "/blog/" | `/blog/${string}` & {} | `/blog/${string}/` & {} | "/hakkimda" | "/hakkimda/" | "/hizmetler" | "/hizmetler/" | "/iletisim" | "/iletisim/" | "/kvkk" | "/kvkk/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/README.md" | "/robots.txt" | string & {};
	}
}