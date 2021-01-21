<script>
  import Button from '@components/Button.svelte'
  import { router } from 'tinro'
</script>

<style>
  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }

  .main-container img {
    width: 100%;
    margin-bottom: 4.5rem;
  }

  .main-container h1 {
    font-size: 2rem;
    font-weight: 400;
    color: var(--primary-blue);
  }

  .main-container :global(button) {
    margin-top: 4.5rem;
  }

  .main-container :global(button a) {
    color: white;
    text-decoration: none;
  }
</style>

<div class='main-container'>
  <img src='assets/easy-carros-logo.png' alt='EasyCarros logo'>
  <h1>Bem-vindo ao teste front end!</h1>
  <p>
    Este teste tem como objetivo avaliar e desafiar você. Não e obrigatório realiza-lo completamente, queremos apenas reconhecer seu esforço e potencial para aprender, se adaptar e tomar decisões.
  </p>
  <Button on:click={() => router.goto('/crud')} primary>Entrar</Button>
</div>
