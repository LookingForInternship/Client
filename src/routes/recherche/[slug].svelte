<script lang="ts" context="module">
    import type { Load } from '@sveltejs/kit';
    import Nav from '../../components/navbar.svelte'

    export const load: Load = async ({ page: { params }, fetch }) => {
        const { slug } = params;

        const res = await fetch('https://arcane-bayou-36652.herokuapp.com/naufrages/' + slug);
        if (res.status === 404) {
            const error = new Error(`La donnée n°${slug} n'a pas été trouvée.`);
            return { status: 404, error };
        } else {
            const data = await res.json();
            return { props: { naufrage: data } };
        }
    };
</script>

<script lang="ts">
    import type { Naufrage } from '$lib/types';
    export let naufrage: Naufrage;
</script>

<main class="flex flex-col items-center dark:text-white h-screen">
    <p class="mt-10 sm:mt-20 text-center uppercase text-purple text-xs font-bold">données de naufrage</p>
    <h1 class="mt-10 text-2xl font-bold">Naufrage du {naufrage.nom_bateau}</h1>
    <div class="mt-10 flex flex-col">
        <p class="text-md ">Lieu du naufrage : {naufrage.lieu}</p>
        <p class="text-md ">Pays du naufrage : {naufrage.country}</p>
        <p class="text-md ">Nombres de morts : {naufrage.country}</p>
        <p class="text-md ">Date du naufrage : {naufrage.jour_du_naufrage}</p>
        <a class="flex flex-row py-3 px-5 shadow-sm mt-10 rounded-lg font-semibold hover:bg-extralightgray transition dark:bg-dark-light dark:shadow-none dark:hover:bg-dark-cards" target="_blank" href="{naufrage.lien_wikipedia}">Lire l'article Wikipédia sur l'accident <img class="ml-2 w-6" src="/wikipedia_logo.svg" alt="Logo wikipedia"></a>
    </div>
</main>