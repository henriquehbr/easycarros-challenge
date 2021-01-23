<script>
  import Button from '@components/Button.svelte'
  import checkIcon from '@assets/check-icon.svg'
  import exitIcon from '@assets/exit-icon.svg'
</script>

<style>
  .table-container {
    overflow: auto;
    max-width: 1024px;
    width: 100%;
  }

  table {
    border-spacing: 0 1em;
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
      <tr>
        <td class='service-name'>Lavagem ecológica</td>
        <td>---</td>
        <td>20/08/2020</td>
        <td class='vehicle-plate'>MBB-1996</td>
        <td class='action-buttons'>
          <Button small secondary color='red'>
            <img src={exitIcon} alt='Exit icon'>
            Excluir
          </Button>
          <Button small secondary color='limegreen'>
            <img src={checkIcon} alt='Check icon' />
            Finalizar
          </Button>
        </td>
      </tr>
      <tr>
        <td class='service-name'>Martelinho de Ouro</td>
        <td>04/08/2020</td>
        <td>04/08/2020</td>
        <td class='vehicle-plate'>MAR-1993</td>
        <td class='action-buttons'>
          <Button small secondary color='red'>
            <img src={exitIcon} alt='Exit icon'>
            Excluir
          </Button>
          <Button small secondary color='limegreen'>
            <img src={checkIcon} alt='Check icon' />
            Finalizar
          </Button>
        </td>
      </tr>
      <tr>
        <td class='service-name'>Higienização completa</td>
        <td>30/07/2020</td>
        <td>30/07/2020</td>
        <td class='vehicle-plate'>URL-2020</td>
        <td class='action-buttons'>
          <Button small secondary color='red'>
            <img src={exitIcon} alt='Exit icon'>
            Excluir
          </Button>
          <Button small secondary color='limegreen'>
            <img src={checkIcon} alt='Check icon' />
            Finalizar
          </Button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
