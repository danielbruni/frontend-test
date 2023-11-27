<script lang="ts">
import { fade } from 'svelte/transition';
import type { AnimeProp } from '../types';
import {sineInOut} from "svelte/easing";

export let anime: AnimeProp;
export let index: number;
</script>

<div transition:fade={{ delay: index * 0.25, duration: 50, easing: sineInOut }} class="max-w-sm rounded relative w-full">
	<div class="relative h-[37vh] w-full">
		<img src={`https://shikimori.one${anime.image.original}`} alt={anime.name} class="rounded-xl" />
	</div>
	<div class="flex flex-col gap-3 py-4">
		<div class="flex items-center justify-between gap-1">
			<h2 class="line-clamp-1 w-full text-xl font-bold text-white">
				{index} {anime.name}
			</h2>
			<div class="rounded-sm bg-[#161921] px-2 py-1">
				<p class="text-sm font-bold capitalize text-white">
					{anime.kind}
				</p>
			</div>
		</div>
		<div class="flex items-center gap-4">
			<div class="flex flex-row items-center gap-2">
				<img src="./episodes.svg" alt="episodes" width={20} height={20} class="object-contain" />
				<p class="text-base font-bold text-white">
					{anime.episodes || anime.episodes_aired}
				</p>
			</div>
			<div class="flex flex-row items-center gap-2">
				<img src="./star.svg" alt="star" width={18} height={18} class="object-contain" />
				<p class="text-base font-bold text-[#FFAD49]">{anime.score}</p>
			</div>
		</div>
	</div>
</div>
