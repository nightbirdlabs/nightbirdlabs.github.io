<script lang="ts">
	export let slug: string;
	export let title: string;
	export let author: string;
	export let date: string;
	export let description: string = '';
	export let image: string = '';
	export let imageSvg: string = '';
</script>

<a href="/blog/{slug}" class="group block h-100 p-4 border-2 rounded-lg border-gray-500 dark:border-gray-300 bg-slate-50/30 dark:bg-slate-950/30 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
	<picture>
		{#if imageSvg}
			<source srcset={imageSvg} type="image/svg+xml" />
		{/if}
		{#if image}
			<img src={image} alt={title} class="w-full rounded-lg mb-5 bg-gray-50" />
		{/if}
	</picture>
	<p class="text-md text-gray-700 dark:text-gray-300 mb-1">
		By {author} &bull;
		<time datetime={date}>
			{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
		</time>
	</p>
	<h2 class="text-lg font-semibold">
		{title}
	</h2>
	{#if description}
		<p>
			{description}
		</p>
	{/if}
</a>
