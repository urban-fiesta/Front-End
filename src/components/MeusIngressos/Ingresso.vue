<template>
  <div class="q-pa-md q-gutter-sm col justify-around">
    <q-card
      v-for="ingresso in data.data"
      :key="ingresso.id"
      class="my-card"
    >
      <q-card-section horizontal>
        <q-expansion-item
          class="col-md-11 col-xs"
          label="nome da festa"
        >
          <div class="text-h6">
            {{ ingresso.name }}
          </div>
          <div class="text-h6">
            {{ ingresso.price }}
          </div>
          <div class="text-h6">
            {{ ingresso.date }}
          </div>
          <div class="text-h6">
            {{ ingresso.time }}
          </div>
        </q-expansion-item>
        <q-card-actions>
          <q-btn
            flat
            color="primary"
          >Exibir codigo</q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import MeuIngressosService from '../../services/CreditCardFormService/CreditCardFormService'
import { date } from 'quasar'

export default {
  name: 'Ingresso',
  data () {
    return {
      data: []
    }
  },
  methods: {
    async dataGet () {
      this.data = await MeuIngressosService.list()
      this.data.data.forEach(element => {
        element.date = date.formatDate(element.date, 'DD/MM/YYYY')
        element.time = date.formatDate(element.time, 'HH:mm')
      })
    }
  },
  mounted () {
    this.dataGet()
  }
}
</script>
