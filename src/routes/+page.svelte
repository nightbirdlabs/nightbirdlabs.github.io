<script lang="ts">
	import { posts } from '$lib/posts';
	import BlogCard from '$lib/components/BlogCard.svelte';
</script>

<svelte:head>
	<title>Nightbird Labs</title>
</svelte:head>

<div class="space-y-5 py-10 lg:py-25 xl:py-35">
	<h1 class="text-5xl md:text-6xl xl:text-7xl font-bold">
		Nightbird Labs
	</h1>
	<p class="text-xl md:text-2xl">
		Nightbird Labs are building experimental open-source software. Our flagship project is Nightbird Engine, a new cross-platform game engine for Windows, Linux, Wii U, and 3DS.
	</p>
</div>

<div class="space-y-7">
	<h1 class="text-4xl md:text-5xl xl:text-6xl font-bold">
		Latest News
	</h1>

	<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-6">
	{#each posts.slice(0, 3) as post}
		<li>
			<BlogCard {...post} />
		</li>
	{/each}
	</ul>

	<a href="/blog" class="cursor-pointer rounded-lg px-4 py-3 text-lg text-white bg-cyan-700 hover:bg-cyan-600 transition-colors">
		All Posts
	</a>
</div>
