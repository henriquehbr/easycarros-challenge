<script>
  import { serviceStore } from '@src/serviceStore'
  import AddServiceForm from '@components/AddServiceForm.svelte'
  import Table from '@components/Table.svelte'

  const addService = event => serviceStore.update(services => [...services, event.detail])
  const removeService = event =>
    serviceStore.update(services => services.filter((service, index) => index !== event.detail))
</script>

<AddServiceForm on:addService={addService} />
<Table on:removeService={removeService} serviceStore={$serviceStore} />

