<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';

	let { children } = $props();
	let isEngine = $derived(
		$page.url.pathname.startsWith('/engine') ||
		$page.data.meta?.tags?.includes('nightbird-engine')
	);

	let menuOpen = $state(false);
	const toggleMenu = () => (menuOpen = !menuOpen);
</script>

<style>
	@keyframes pulse-strong {
		0%, 100% {
			opacity: 0.1;
		}
		50% {
			opacity: 0.2;
		}
	}
	.animate-pulse-strong {
		animation: pulse-strong 5s ease-in-out infinite;
	}
</style>

<div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
	<div
		class="absolute w-[60vw] h-[60vw] bg-linear-to-r from-purple-700/70 via-pink-600/70 to-purple-600/70 rounded-full blur-3xl animate-pulse-strong"
		style="top: 10%; left: 20%;">
	</div>
</div>

<header class="sticky top-0">
	<div class="flex items-center px-5 py-6 space-x-7 backdrop-blur-xl bg-slate-50/50 dark:bg-slate-950/50 dark:border-b dark:border-slate-50">
		<a href="/" class="flex items-center space-x-1 text-3xl font-semibold text-black dark:text-white">
			<img src="/logo-white.svg" alt="Nightbird Logo" class="w-16 h-16 hidden dark:block" />
			<img src="/logo-black.svg" alt="Nightbird Logo" class="w-16 h-16 dark:hidden" />
			<span>Nightbird</span>
		</a>
		<nav class="hidden sm:flex space-x-5">
			<a href="/engine" class="text-xl text-black dark:text-white">Engine</a>
			<a href="/blog" class="text-xl text-black dark:text-white">Blog</a>
		</nav>

		<button
			class="sm:hidden ml-auto text-black dark:text-white"
			onclick={toggleMenu}
			aria-label="Toggle menu"
			aria-expanded={menuOpen}
		>
            {#if menuOpen}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            {/if}
		</button>
	</div>

	{#if menuOpen}
		<button
			class="fixed inset-0"
			onclick={toggleMenu}
			aria-label="Close menu"
			tabindex="-1"
		></button>

		<nav class="sm:hidden absolute left-0 right-0 flex flex-col px-6 py-4 space-y-3 border-b border-l border-r rounded-b-2xl backdrop-blur-md bg-slate-50/50 dark:bg-slate-950/50 border-slate-200 dark:border-slate-50">
			<a href="/engine" class="text-xl text-black dark:text-white" onclick={toggleMenu}>Engine</a>
			<a href="/blog" class="text-xl text-black dark:text-white" onclick={toggleMenu}>Blog</a>
		</nav>
	{/if}
</header>

<div class="flex justify-center min-h-screen">
	<main class="flex-1 max-w-7xl space-y-15 py-15 lg:py-25 xl:py-35 px-4 sm:px-6 md:px-10 font-sans text-black dark:text-white">
		{@render children?.()}
	</main>
</div>

<footer class="flex flex-col text-center justify-center py-5 bg-slate-50/50 dark:bg-slate-950/50 dark:border-t dark:border-slate-50 text-gray-700 dark:text-gray-400">
	<p>&copy; 2026 Nightbird Labs. All rights reserved.</p>
	{#if isEngine}
		<p>Not affiliated with, endorsed by, or associated with Nintendo. Wii U and Nintendo 3DS are trademarks of Nintendo Co., Ltd.</p>
	{/if}
</footer>
