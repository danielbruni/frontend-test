<script lang="ts">
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';
    import type {AnimeProp} from "../types";
    import {fetchAnime} from "../utils/fetchAnime";
    import AnimeCard from "./AnimeCard.svelte";

    let data: AnimeProp[] = [];
    let page: number = 2;

    const options: Options = {
    };

    const handleChange = ({ detail }: CustomEvent<ObserverEventDetails
    >) => {
        if(detail.inView) {
            fetchAnime(page).then(res => {
                data = [...data, ...res];
                page++;
            })
        }

    };
</script>

<section class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
    {#each data as item, index}
        <AnimeCard anime={item} index={index} />
    {/each}
</section>
<section class="flex justify-center items-center w-full">
    <div use:inview={options} on:inview_change={handleChange}>
        <img
                src="./spinner.svg"
                alt="spinner"
                width={56}
                height={56}
                class="object-contain"
        />
    </div>
</section>