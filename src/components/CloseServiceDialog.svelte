<script>
  import { afterUpdate } from 'svelte'
  import { Dialog, Datefield, Button } from 'svelte-mui/src'
  import { updateService } from '@src/serviceStore'

  export let visible
  export let serviceIndex

  // Elements
  let closeServiceForm

  // Field values
  let executionDate

  let allowSubmit = false

  const closeDialog = () => {
    closeServiceForm.reset()
    executionDate = ''
    visible = false
  }

  const setExecutionDate = () => {
    updateService(serviceIndex, executionDate)
    closeDialog()
  }

  const validateFormFields = () => {
    const executionDateFulfilled = /^\d{2}\/\d{2}\/\d{4}$/.test(executionDate)
    allowSubmit = executionDateFulfilled ? true : false
  }

  afterUpdate(validateFormFields)
</script>

<style>
  .button-container {
    display: flex;
  }

  .button-container :global(button[disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

<Dialog on:close={() => (visible = false)} {visible}>
  <div slot='title'>Finalizar serviço</div>
  <p>Para finalizar o serviço, informe a data de execução abaixo:</p>
  <form on:submit|preventDefault={setExecutionDate} bind:this={closeServiceForm} id='close-service-form'>
    <Datefield
      readonly
      required
      bind:value={executionDate}
      format='DD/MM/YYYY'
      locale='pt-br'
      label='Data de execução'
    />
  </form>
  <div slot='actions' class='button-container'>
    <Button fullWidth on:click={closeDialog}>Cancelar</Button>
    <Button fullWidth type='submit' disabled={!allowSubmit} form='close-service-form'>
      Confirmar
    </Button>
  </div>
</Dialog>
