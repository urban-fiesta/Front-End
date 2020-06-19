<template>
  <q-page>
    <div class="row justify-center q-pa-md">
      <div  class="col-md-12">
        <q-card class="bg-grey-6" bordered>
          <eventos />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import Eventos from 'components/Eventos/Eventos'

export default {
  name: 'DashboardPage',
  components: {
    Eventos
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
