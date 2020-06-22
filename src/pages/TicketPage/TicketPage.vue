<template>
<q-page>
  <div class="row justify-around">
    <presentation class="col-md-11 col-xs-12" />
    <roteiro class="col-md-11 col-xs-12" />
    <div class="row col-md-11">
      <div class="row col-md-5 q-py-md justify-Left">
        <div class="text-h5" style="color: white;">
          Menu
        </div>
      </div>
        <q-list class="row justify-between">
          <Menu class="col-md-6 col-xs-12" />
          <Menu class="col-md-6 col-xs-12" />
          <Menu class="col-md-6 col-xs-12" />
          <Menu class="col-md-6 col-xs-12" />
          <Menu class="col-md-6 col-xs-12" />
          <Menu class="col-md-6 col-xs-12" />
          <Menu class="col-md-6 col-xs-12" />
          <Menu class="col-md-6 col-xs-12" />
        </q-list>
    </div>
  </div>
</q-page>
</template>

<script>
import Presentation from 'components/Tickect/Ticket'
import Roteiro from 'components/Roteiro/Roteiro'
import Menu from 'components/Menu/Menu'

export default {
  name: 'TickPage',
  components: {
    Presentation,
    Roteiro,
    Menu
  }
}
</script>

<style>
</style>
