<template>
  <q-page>
    <q-card class="row bg-primary justify-center">
      <eventos-ativos class="col-md-12"/>
      <eventos-passados class="col-md-12"/>
    </q-card>
  </q-page>
</template>

<script>
import EventosAtivos from 'components/Eventos/EventosAtivos'
import EventosPassados from 'components/Eventos/EventosPassados'

export default {
  name: 'DashboardPage',
  components: {
    EventosAtivos,
    EventosPassados
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
