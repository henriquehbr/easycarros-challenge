import { writable } from 'svelte/store'

const serviceStore = writable([])

const createService = service => serviceStore.update(services => [...services, service])
const deleteService = indexToDelete =>
  serviceStore.update(services => services.filter((service, index) => index !== indexToDelete))
const updateService = (indexToUpdate, executionDate) =>
  serviceStore.update(services =>
    services.map((service, index) => index === indexToUpdate && { ...service, executionDate })
  )

export { serviceStore, createService, updateService, deleteService }
