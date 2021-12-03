<script>
  import "../app.css";
  import Fa from 'svelte-fa'
    import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
    import DarkMode from "svelte-dark-mode";

    let theme;
    $: switchTheme = theme === "dark" ? "light" : "dark";

</script>

<DarkMode bind:theme />

<div class="{theme} ">
  <div class="dark:bg-dark-background transition h-screen">
    <nav class="py-4 flex flex-row justify-between items-center px-16">
    {#if theme == 'dark'}
      <a href="../"><img class="h-12 transition" src="/logo-dark.png" alt="Logo"></a>
    {:else}
      <a href="../"><img class="h-12" src="/logo.png" alt="Logo"></a>
    {/if}
    <div class="flex flex-row items-center">
        <div on:click={() => (theme = switchTheme)}>
            {#if theme == 'dark'}
                <Fa icon={faSun} size="lg" color="white" />
            {:else}
                <Fa icon={faMoon} size="lg" color="#475B87" />
            {/if}
        </div>
        <a href="/contact" class="ml-8 bg-lightblue dark:bg-blue dark:hover:bg-lightblue hover:bg-blue transition text-md py-2 px-4 rounded-xl text-white">Je ne trouve pas le naufrage</a>
    </div>
  </nav>
  <slot />
  </div>
</div>
