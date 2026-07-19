<script lang="ts">
	export let title: string;
	export let author: string;
	export let date: string;
	export let editDate: string;
	export let image: string;
	export let imageSvg: string;
	export let tags: string[] | undefined = undefined;
</script>

<div class="flex justify-center">
	<article class="space-y-15 max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
		<header class="space-y-2">
			<picture>
				{#if imageSvg}
					<source srcset={imageSvg} type="image/svg+xml" />
				{/if}
				{#if image}
					<img src={image} alt={title} class="w-full rounded-lg mb-5 bg-gray-50" />
				{/if}
			</picture>
			<h1 class="text-4xl md:text-5xl xl:text-6xl font-bold">
				{title}
			</h1>
			<p class="text-md text-gray-700 dark:text-gray-300">
				By {author} &bull;
				<time datetime={date}>
					{new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
				</time>
			</p>
			<p class="text-md text-gray-700 dark:text-gray-300">
				Last edited
				<time datetime={editDate}>
					{new Date(editDate).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
				</time>
			</p>
			{#if tags && tags.length > 0}
				<div class="flex gap-2 flex-wrap">
					{#each tags as tag}
						<a
							href={`/blog/tag/${tag}`}
							class="text-sm px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
						>
							{tag}
						</a>
					{/each}
				</div>
			{/if}
		</header>

		<div class="prose max-w-none dark:prose-invert prose-headings:pt-5 prose-headings:pb-0 prose-headings:m-0 text-xl prose-headings:text-4xl prose-headings:md:text-5xl prose-headings:xl:text-6xl prose-p:text-black dark:prose-p:text-white">
			<slot />
		</div>
	</article>
</div>
