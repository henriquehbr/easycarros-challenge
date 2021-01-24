<script>
  import { serviceStore, deleteService } from '@src/serviceStore'
  import Button from '@components/Button.svelte'
  import CloseServiceDialog from '@components/CloseServiceDialog.svelte'
  import checkIcon from '@assets/check-icon.svg'
  import exitIcon from '@assets/exit-icon.svg'

  let dialogVisible = false
</script>

<style>
  .table-container {
    overflow: auto;
    max-width: 1200px;
    width: 100%;
  }

  table {
    border-spacing: 0 1em;
    padding: 8px;
    width: 100%;
  }

  thead {
    background-color: var(--primary-blue);
    color: white;
  }

  thead td {
    padding: 8px 16px;
  }

  tr {
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.2);
  }

  td {
    padding: 24px 18px;
  }

  tr td.service-name, td.vehicle-plate {
    color: var(--primary-blue);
    font-weight: bold;
  }

  td.action-buttons {
    display: flex;
  }

  td.action-buttons :global(button) {
    display: flex;
    align-items: center;
    margin: 0 8px;
  }

  td.action-buttons :global(button > img) {
    margin-right: 8px;
  }

  td.action-buttons :global(button:first-of-type) {
    margin-left: 0;
  }

  td.action-buttons :global(button:last-of-type) {
    margin-right: 0;
  }
</style>

<div class='table-container'>
  <table>
    <thead>
      <td>Serviço</td>
      <td>Data de execução</td>
      <td>Data de Agendamento</td>
      <td>Placa</td>
      <td></td>
    </thead>
    <tbody>
      {#if $serviceStore.length < 1}
        <tr>
          <td align='center' colspan='5'>Nenhum serviço agendado!</td>
        </tr>
      {:else}
        {#each $serviceStore as service, serviceIndex}
          <CloseServiceDialog {serviceIndex} bind:visible={dialogVisible} />
          <tr>
            <td class='service-name'>{service.serviceName}</td>
            <td>{service.executionDate || '---'}</td>
            <td>{service.scheduledDate}</td>
            <td class='vehicle-plate'>{service.vehiclePlate}</td>
            <td class='action-buttons'>
              <Button small secondary color='red' on:click={() => deleteService(serviceIndex)}>
                <img src={exitIcon} alt='Exit icon'>
                Excluir
              </Button>
              <Button small secondary color='limegreen' on:click={() => (dialogVisible = true)}>
                <img src={checkIcon} alt='Check icon' />
                Finalizar
              </Button>
            </td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
