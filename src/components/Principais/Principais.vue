<template>
  <div>
    <div class="row q-py-md justify-center">
      <div class="col-md-2 text-h5" style="color: white">
        Principais Ofertas
      </div>
    </div>
    <div class="row justify-between">
      <principais-ofertas class="col-md-5 col-xs-12" />
      <ofertas class="col-md-5 col-xs-12" />
      <ofertas class="col-md-5 col-xs-12" />
    </div>
  </div>
</template>

<script>
import Ofertas from 'components/Ofertas/Ofertas'
import PrincipaisOfertas from 'components/PrincipaisOfertas/PrincipaisOfertas'

export default {
  name: 'PrincipaisOferas',
  components: {
    Ofertas,
    PrincipaisOfertas
  },
  data () {
    return {
      slide: 1,
      navigation: 'none'
    }
  }
}
</script>

<style scoped>

</style>
