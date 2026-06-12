<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Blog | Nightbird</title>
</svelte:head>

<h1 class="text-4xl md:text-5xl xl:text-6xl font-bold">
	Blog
</h1>

<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6">
	{#each data.posts as post}
		<li>
			<BlogCard {...post} />
		</li>
	{/each}
</ul>
