import { posts } from '$lib/posts';
import type { PageLoad } from './$types';

export const prerender = true;

export function entries() {
	const tags = new Set<string>();

	for (const post of posts) {
		for (const tag of post.tags ?? []) {
			tags.add(tag);
		}
	}

	return Array.from(tags).map((tag) => ({ tag }));
}

export const load: PageLoad = ({ params }) => {
	const { tag } = params;

	return {
		tag,
		posts: posts.filter((p) => p.tags?.includes(tag))
	};
}
