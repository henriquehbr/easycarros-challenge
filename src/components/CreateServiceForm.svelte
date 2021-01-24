<script>
  import { afterUpdate } from 'svelte'
  import { Textfield, Datefield } from 'svelte-mui/src'
  import { createService } from '@src/serviceStore'
  import Button from '@components/Button.svelte'

  // Elements
  let createServiceForm

  // Field values
  let serviceName
  let scheduledDate
  let vehiclePlate

  let allowSubmit = false

  $: serviceData = { serviceName, scheduledDate, vehiclePlate }

  const validateFormFields = () => {
    const serviceNameFulfilled = serviceName.length > 0
    const scheduledDateFulfilled = /^\d{2}\/\d{2}\/\d{4}$/.test(scheduledDate)
    const vehiclePlateFulfilled = /^[a-zA-Z]{3}\-\d{4}$/.test(vehiclePlate)
    const allFieldsFulfilled = serviceNameFulfilled && scheduledDateFulfilled && vehiclePlateFulfilled
    allowSubmit = allFieldsFulfilled ? true : false
  }

  const submitForm = () => {
    createService(serviceData)
    createServiceForm.reset()
  }

  afterUpdate(validateFormFields)
</script>

<style>
  .add-container {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.2);
    padding: 24px;
    max-width: 1200px;
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
  <form bind:this={createServiceForm} id='add-service-form' on:submit|preventDefault={submitForm}>
    <Textfield bind:value={serviceName} required label='Serviço' />
    <Datefield
      bind:value={scheduledDate}
      readonly
      required
      locale='pt-br'
      label='Data de agendamento'
      format='DD/MM/YYYY'
    />
    <Textfield bind:value={vehiclePlate} required label='Placa' />
  </form>
  <div class='buttons-container'>
    <Button secondary type='reset' form='add-service-form'>
      Cancelar
    </Button>
    <Button primary disabled={!allowSubmit} type='submit' form='add-service-form'>Adicionar</Button>
  </div>
</div>
