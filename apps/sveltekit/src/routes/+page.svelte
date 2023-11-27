<script lang="ts">
	import type { PageData } from './$types';
	import AnimeCard from "../components/AnimeCard.svelte";
	import LoadMore from "../components/LoadMore.svelte";

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="sm:p-16 py-16 px-8 flex flex-col gap-10">
	<h2 class="text-3xl text-white font-bold">Explore Anime</h2>

	<section class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
		{#each data.anime as item, index}
			<AnimeCard anime={item} index={index} />
		{/each}
	</section>
	<LoadMore />
</main>