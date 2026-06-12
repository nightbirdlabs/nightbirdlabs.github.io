import type { PageLoad } from './$types';
import type { Post } from '$lib/types';

export const entries = () =>
	import('../../../lib/posts').then(m => m.posts.map(({ slug }) => ({ slug })));

export const load: PageLoad = async ({ params }) => {
	const post = await import(`../../../posts/${params.slug}.md`);

	return {
		content: post.default,
		meta: post.metadata as Omit<Post, 'slug'>
	};
}
