import type { Post } from './types';

const modules = import.meta.glob<{ metadata: Omit<Post, 'slug'> }>(
	'/src/posts/*.md',
	{ eager: true }
);

export const posts: Post[] = Object.entries(modules)
	.map(([path, mod]) => ({
		slug: path.split('/').pop()!.replace('.md', ''),
		...mod.metadata
	}))
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
