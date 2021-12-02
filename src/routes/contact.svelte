<script lang="ts">
    import Nav from '../components/navbar.svelte'
    import { goto } from '$app/navigation';

    let id, nom_naufrage, mail, date_naufrage, message; 

    async function postMessage() {
        const res = await fetch('https://arcane-bayou-36652.herokuapp.com/messages-utilisateurs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ identifier: id, nom_naufrage, mail, date_naufrage, message })
        });
        if (res.ok) {
            alert("Votre demande a bien été enregistrée. Nos équipes vous contacterons sous peu.");
            goto('/');   
        } else {
            const data: { message: { messages: { message: string }[] }[] } = await res.json();
            if (data?.message?.[0]?.messages?.[0]?.message) {
                alert(data.message[0].messages[0].message);
            }
        }
    }
</script>

<Nav></Nav>
<main class="flex justify-center">
    <form on:submit|preventDefault={postMessage} class="w-11/12 sm:w-3/5 lg:w-2/5  xl:w-2/6 mb-8 pb-8 shadow-sm rounded-xl px-8 flex flex-col justify-center">
            <div class="flex flex-col mt-8">
                <label class="font-normal text-sm" for="nom">Nom du naufragé</label>
                <input bind:value={nom_naufrage} class="field" placeholder="John Doe" name="nom" id="nom">
            </div>
            <div class="flex flex-col mt-8">
                <label class="font-normal text-sm" for="mail">Date du naufrage</label>
                <input bind:value={date_naufrage} type="date" class="field" name="date" id="date">
            </div>
            <div class="flex flex-col mt-8">
                <label class="font-normal text-sm" for="mail">Votre email</label>
                <input bind:value={mail} class="field" placeholder="votre.email@exemple.com" name="mail" id="mail">
            </div>
            <div class="flex flex-col mt-8">
                <label class="font-normal text-sm" for="mail">Merci de nous décrire la situation</label>
                <textarea bind:value={message} class="field" placeholder="" name="message" id="message" rows="2"></textarea>
            </div>
            <button class="mt-12 bg-lightblue hover:bg-blue transition text-md py-2 px-4 rounded-xl text-white submit" type="submit">Poster ma demande</button>
        </form>
</main>