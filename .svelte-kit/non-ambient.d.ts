
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
		RouteId(): "/" | "/blog" | "/blog/[slug]" | "/datenschutz" | "/dienstleistungen" | "/kontakt" | "/ueber-mich";
		RouteParams(): {
			"/blog/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/blog": { slug?: string };
			"/blog/[slug]": { slug: string };
			"/datenschutz": Record<string, never>;
			"/dienstleistungen": Record<string, never>;
			"/kontakt": Record<string, never>;
			"/ueber-mich": Record<string, never>
		};
		Pathname(): "/" | "/blog" | "/blog/" | `/blog/${string}` & {} | `/blog/${string}/` & {} | "/datenschutz" | "/datenschutz/" | "/dienstleistungen" | "/dienstleistungen/" | "/kontakt" | "/kontakt/" | "/ueber-mich" | "/ueber-mich/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/README.md" | "/logo.svg" | "/robots.txt" | string & {};
	}
}