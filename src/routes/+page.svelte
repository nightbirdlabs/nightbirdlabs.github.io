<script lang="ts">
	import { posts } from '$lib/posts';
	import BlogCard from '$lib/components/BlogCard.svelte';
</script>

<svelte:head>
	<title>Nightbird Engine</title>
</svelte:head>

<div class="space-y-5 py-15 lg:py-25 xl:py-35">
	<h1 class="text-4xl md:text-5xl xl:text-6xl font-bold">
		Nightbird Labs
	</h1>
	<p class="text-xl md:text-2xl">
		Nightbird Labs
	</p>
	<div class="py-5">
		<a href="https://github.com/nightbirdlabs" class="cursor-pointer rounded-lg px-4 py-3 text-lg text-white bg-pink-700 hover:bg-pink-600 transition-colors">
			Check it out on GitHub
		</a>
	</div>
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

<div class="space-y-6">
	<h1 class="text-4xl md:text-5xl xl:text-6xl font-bold">
		Why use Nightbird?
	</h1>
	<p class="text-xl md:text-2xl">
		Frankly, we do not currently recommend it. Nightbird is still in pre-alpha, with many more features and refinements planned before a proper release. The engine is constantly improving with the aim of providing reliable cross-platform development for Windows, Linux, Wii U, and 3DS.
	</p>
</div>

<div class="space-y-5">
	<h1 class="text-4xl md:text-5xl xl:text-6xl font-bold">
		App
	</h1>

	<p class="text-xl md:text-2xl">
		The app is the program that runs on the target platform. Assets are loaded from cooked binary platform-specific formats.
	</p>
</div>

<div class="space-y-5">
	<h1 class="text-4xl md:text-5xl xl:text-6xl font-bold">
		Editor
	</h1>

	<p class="text-xl md:text-2xl">
		The editor provides tools to create and edit scenes, adding model and audio assets, and cook them into platform-specific formats for the App.
	</p>
</div>

<div class="space-y-5">
	<h1 class="text-4xl md:text-5xl xl:text-6xl font-bold">
		Project
	</h1>

	<p class="text-xl md:text-2xl">
		Your project can be compiled in two configurations: Editor or App. With Editor the project is built as a shared library for the Editor to load at runtime. For App, the project is build as a standalone excutable for the target platform.
	</p>
</div>
