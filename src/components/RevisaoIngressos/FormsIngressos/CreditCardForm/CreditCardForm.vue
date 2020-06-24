<template>
  <div>
    <div class="row q-py-md justify-start">
      <div class="col-md-11 text-h5" style="color: white">
        Dados do pagamento
      </div>
    </div>
    <div class="row">
      <q-card class="row col-md-7 justify-start q-py-xs q-gutter-md">
          <div class="col-md-11 col-xs-12">
            <q-input filled v-model="text" outlined label="Número do cartão"></q-input>
          </div>
          <div class="col-md-11 c ol-xs-12">
            <q-input filled v-model="text" outlined  label="Senha"></q-input>
          </div>
        <div class="row col-md-11 q-gutter-sm">
          <div class="col-md-3 col-xs-9">
            <q-select filled v-model="model" :options="options" label="Mês" />
          </div>
          <div class="col-md-3 col-xs-9">
            <q-select filled v-model="model" :options="year" label="Year" />
          </div>
          <div class="col-md-3 col-xs-9">
            <q-input v-model="text" outlined ></q-input>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreditCardForm',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      year: [2020, 2030],
      model: '',
      text: ''
    }
  }
}
</script>

<style>

</style>
