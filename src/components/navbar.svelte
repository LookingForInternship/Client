<script lang="ts">
    import Fa from 'svelte-fa'
    import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
</script>

<nav class="my-4 flex flex-row justify-between items-center px-16">
    <a href="../"><img class="h-12" src="/logo.png" alt="Logo"></a>
    <Fa icon={faSun} size="lg" color="dark" />
</nav>