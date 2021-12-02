<script lang="ts">
    import Nav from '../components/navbar.svelte'

    let nom, prenom, mail, date; 
</script>

<Nav></Nav>
<main class="flex justify-center">
        <form class="w-11/12 sm:w-3/5 lg:w-2/5  xl:w-2/6 mb-8 pb-8 shadow-sm rounded-xl px-8 flex flex-col justify-center">
            <div class="flex flex-col mt-8">
                <label class="font-normal text-sm" for="nom">Nom du naufragé</label>
                <input bind:value={nom} class="field" placeholder="John" name="nom" id="nom">
            </div>
            <div class="flex flex-col mt-8">
                <label class="font-normal text-sm" for="prenom">Prénom du naufragé</label>
                <input bind:value={prenom} class="field" placeholder="Doe" name="prenom" id="prenom">
            </div>
            <div class="flex flex-col mt-8">
                <label class="font-normal text-sm" for="mail">Date du naufrage</label>
                <input bind:value={mail} type="date" class="field" name="date" id="date">
            </div>
            <div class="flex flex-col mt-8">
                <label class="font-normal text-sm" for="mail">Votre email</label>
                <input bind:value={mail} class="field" placeholder="votre.email@exemple.com" name="mail" id="mail">
            </div>
            <button class="mt-12 bg-lightblue hover:bg-blue transition text-md py-2 px-4 rounded-xl text-white">Poster ma demande</button>
        </form>
</main>