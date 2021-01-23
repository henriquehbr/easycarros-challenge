<script>
  import { serviceStore } from '@src/serviceStore'
  import AddServiceForm from '@components/AddServiceForm.svelte'
  import Table from '@components/Table.svelte'

  const updateServices = event => {
    serviceStore.update(services => [...services, event.detail])
    console.log($serviceStore)
  }
</script>

<AddServiceForm on:addService={updateServices} />
<Table serviceStore={$serviceStore} />

