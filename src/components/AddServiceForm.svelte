<script>
  import { Textfield, Datefield } from 'svelte-mui/src'
  import Button from '@components/Button.svelte'
</script>

<style>
  .add-container {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.2);
    padding: 24px;
    max-width: 1024px;
    width: 100%;
    margin-bottom: 64px;
  }

  h3 {
    font-size: 20px;
    color: var(--primary-blue);
    font-weight: bold;
    margin: 0.5em 0;
  }

  p {
    margin: 0 0 1rem;
  }

  form {
    display: flex;
    margin-bottom: 24px;
  }

  form > :global(div) {
    margin: 0 24px;
  }

  form > :global(div:nth-of-type(2)) {
    width: 100%;
  }

  .buttons-container {
    display: flex;
  }

  .buttons-container :global(button) {
    margin: 0 8px;
  }

  .buttons-container :global(button:first-of-type) {
    margin-left: auto;
  }

  .buttons-container :global(button:last-of-type) {
    margin-right: 0;
  }
</style>

<div class='add-container'>
  <h3>Nova ordem de serviço</h3>
  <p>Os campos com * são obrigatórios</p>
  <form>
    <Textfield label='Serviço*' />
    <Datefield readonly locale='pt-br' label='Data de nascimento*' format='DD/MM/YYYY' />
    <Textfield label='Placa*' />
  </form>
  <div class='buttons-container'>
    <Button secondary>
      Cancelar
    </Button>
    <Button primary>Adicionar</Button>
  </div>
</div>
