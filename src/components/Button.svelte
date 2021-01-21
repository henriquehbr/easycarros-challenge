<script>
  import { createEventDispatcher } from 'svelte'

  export let primary = false
  export let secondary = false

  const dispatch = createEventDispatcher()
</script>

<style>
  button {
    padding: 0.75rem 2.25rem;
    border: none;
    border-radius: 1.5rem;
    cursor: pointer;
    font-family: 'Montserrat';
    font-size: 1.125rem;
    outline: none;
  }

  button.primary {
    background-color: var(--primary-blue);
    color: white;
  }

  button.secondary {
    background-color: transparent;
    color: var(--primary-blue);
  }
</style>

<button on:click={() => dispatch('click')} class:primary class:secondary>
  <slot />
</button>
