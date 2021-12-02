<script lang="ts">
    import Nav from '../components/navbar.svelte'
    import { onMount } from 'svelte';
    import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch';

    let searchClient : SearchClient;
    let index : SearchIndex;
    let query = '';
    let hits = [];

    onMount(() => {
        searchClient = algoliasearch(
            'HFWIBHZTEY',
            'a8488809ffdb96ce89a47a932ff66665'
        )

        index = searchClient.initIndex('naufrage');
        index.search(query).then(console.log);

    })

    async function search(){
        const result = await index.search(query);
        hits = result.hits;
    }

</script>

<Nav></Nav>
<main class="mt-12 flex items-center flex-col">
    <h1 class="text-3xl font-bold text-dark">Retrouvez tous les naufrages de l'histoire, gratuitement.</h1>
    <div class="mt-8 flex justify-center">
        <svg class="rotate-160" xmlns="http://www.w3.org/2000/svg" width="100" height="60"><g fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><path d="M9.748 73.448c-5.466-9.41-12.212-20.124.532-26.994 9.499-5.12 21.629-3.752 30.447 1.811 8.999 5.677 16.714 14.104 28.574 9.748 18.443-6.774 19.853-35.315 22.447-50.898"/><path d="M97.003 12.678c-2.956-3.242-2.408-7.53-4.574-11.126-1.822 2.634-5.759 7.808-8.893 9.052"/></g></svg>
    </div>
    <input bind:value={query} on:keyup={search}  class="mt-6 w-3/5 px-4 py-3 border shadow-sm rounded-xl focus:border-blue outline-none" type="text" placeholder="Tapez le nom d'un navire, d'un endroit, une date...">
    {#if hits.length == 0}
    <div class="mt-16 flex flex-col items-center">

    </div>
    {/if}
    {#each hits as hit}
    <a href="/recherche/{hit.strapi_id}" class="mt-4 py-4 shadow-sm rounded-xl w-3/5 bg-white hover:cursor-pointer hover:bg-extralightgray  transition">
        <h2 class="px-6 ">{@html hit._highlightResult.nom_bateau.value} : Au large de {@html hit._highlightResult.lieu.value} - {@html hit._highlightResult.country.value}</h2>
        <h3 class="px-6 text-sm">{@html hit._highlightResult.jour_du_naufrage.value}</h3>
    </a>
    {/each}
    <p class="mt-5 text-blue text-sm">Cette application à été réalisée avec ❤️ pour les Sauveteurs de Dunkerque dans le cadre de la nuit de l'info 2021.</p>
</main>
<footer>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff"  fill-opacity="1" d="M0,96L30,128C60,160,120,224,180,213.3C240,203,300,117,360,117.3C420,117,480,203,540,208C600,213,660,139,720,138.7C780,139,840,213,900,224C960,235,1020,181,1080,133.3C1140,85,1200,43,1260,42.7C1320,43,1380,85,1410,106.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
</footer>


<style>
    :global(em) {
        color:#0755BA;
    }
</style>
