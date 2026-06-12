// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '*.md' {
	import type { SvelteComponent } from 'svelte';
	import type { Post } from '$lib/types';

	export default SvelteComponent;
	export const metadata: Omit<Post, 'slug'>;
}

export {};
