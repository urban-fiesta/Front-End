<template>
<q-page>
  <div class="row justify-around">
    <presentation class="col-md-11 col-xs-12" />
    <roteiro class="col-md-11 col-xs-12" />
  </div>
</q-page>
</template>

<script>
import Presentation from 'components/Tickect/Ticket'
import Roteiro from 'components/Roteiro/Roteiro'

export default {
  name: 'TickPage',
  components: {
    Presentation,
    Roteiro
  }
}
</script>

<style>
</style>
