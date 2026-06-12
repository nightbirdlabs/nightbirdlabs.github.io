<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	export let data: PageData;
	const { content: PostContent, meta } = data;

	const siteUrl = 'https://nightbirdlabs.github.io';
	$: url = $page.url.href;
</script>

<svelte:head>
	<title>{meta.title} | Nightbird</title>
	{#if meta.description}
		<meta name="description" content={meta.description} />
	{/if}

	<meta property="og:url" content={url} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`${meta.title} | Nightbird`} />

	{#if meta.description}
		<meta property="og:description" content={meta.description} />
	{/if}
	{#if meta.image}
		<meta property="og:image" content={`${siteUrl}${meta.image}`} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta property="og:image:secure_url" content={`${siteUrl}${meta.image}`} />
	{/if}
</svelte:head>

<PostContent />
