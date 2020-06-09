<template>
  <q-page>
    <div class="row justify-around">
      <principais-ofertas class="col-md-11 col-xs-12"/>
    </div>
  </q-page>
</template>

<script>
import PrincipaisOfertas from 'components/PrincipaisOfertas/PrincipaisOfertas'

export default {
  name: 'PageIndex',
  components: {
    PrincipaisOfertas
  }
}
</script>

<style scoped>
</style>
