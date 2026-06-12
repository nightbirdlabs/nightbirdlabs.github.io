<script lang="ts">
	import BlogCard from "$lib/components/BlogCard.svelte";
	import type { PageData } from './$types';

	export let data: PageData;
	const { tag, posts } = data;
</script>

<svelte:head>
	<title>Blog | Nightbird</title>
</svelte:head>

<h1 class="text-5xl md:text-6xl xl:text-7xl font-bold">
	Blog
</h1>

<div>
	<a
		href="/blog"
		class="inline-flex items-center gap-1 text-sm px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
	>
		{tag}
		<span class="text-xl leading-none mb-1">&otimes;</span>
	</a>

	<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
		{#each posts as post}
			<li>
				<BlogCard {...post} />
			</li>
		{/each}
	</ul>
</div>
