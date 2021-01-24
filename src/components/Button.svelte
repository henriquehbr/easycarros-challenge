<script>
  import { createEventDispatcher } from 'svelte'
  import Loadable from 'svelte-loadable'

  export let primary = false
  export let secondary = false
  export let small = false
  export let disabled = false
  export let ripple = true
  export let color = ''
  export let type = 'button'
  export let form = ''

  const dispatch = createEventDispatcher()
</script>

<style>
  button {
    padding: 0.75rem 2.25rem;
    border: none;
    border-radius: 1.5rem;
    cursor: pointer;
    font-family: 'Montserrat';
    font-size: 1rem;
    outline: none;
    border-width: 1px;
    border-style: solid;
  }

  button.small {
    padding: 0.5rem 1rem;
  }

  button.primary {
    background-color: var(--primary-blue);
    border-color: var(--primary-blue);
    color: white;
  }

  button.secondary {
    color: var(--color);
    border-color: var(--color);
    background-color: transparent;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

<button
  {type}
  {form}
  {disabled}
  style={`--color: ${color || '#0c5c8c'}`}
  on:click={() => dispatch('click')}
  class:primary
  class:secondary
  class:small
>
  <slot />
  {#if ripple}
    <Loadable loader={() => import('svelte-mui/src/Ripple.svelte')} />
  {/if}
</button>
