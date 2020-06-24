<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <ingresso />
  </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>

<script>

import Ingresso from 'components/MeusIngressos/Ingresso'

export default {
  components: {
    Ingresso
  },
  data () {
    return {

    }
  }
}
</script>
