<script>
  import { Route, router } from 'tinro'
  import Loadable from 'svelte-loadable'

  router.mode.hash()
</script>

<Route path="/">
  <Loadable loader={() => import('@pages/Home.svelte')} />
</Route>

<Route path="/crud">
  <Loadable loader={() => import('@pages/Crud.svelte')} />
</Route>
