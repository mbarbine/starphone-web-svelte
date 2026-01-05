<script>
    import { fade, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
</script>

<div 
    in:fly={{ y: -10, duration: 300, easing: quintOut }} 
    out:fade={{ duration: 200 }}
>
    <slot />
</div>

<style>
    div {
        width: 100%;
        height: 100%;
    }
</style>
