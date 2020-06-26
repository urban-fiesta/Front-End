<template>
  <div>
    <div class="row q-py-md justify-center">
      <div
        class="col-md-11 col-xs-8 text-h5"
        style="color: white"
      >
        <p>Revise seu pedido</p>
      </div>
    </div>
    <q-card
      class="row my-card"
      flat
      bordered
    >
      <q-card-section class="row col-md-5 col-xs-12 flexr">
        <q-img
          class="rounded-borders"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
      <q-card-section class="row col-md-6">
        <div class="col-md-12">
          <div class="text-h3 q-mt-sm q-mb-xs">Espaço Cultural Woodstock</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Av. Conselheiro Furtado, 1662 - Cremação, Belém</div>
          <div class="text-h6">
            <u>Evento</u>: Festival 2 anos Woodstock
          </div>
          <div class="text-h6">
            <u>Data</u>: 26/06/2020
          </div>
          <div class="text-h6">
            <u>Horário</u>: 22:00h ás 4:00h
          </div>
        </div>
        <q-card-section class="row justify-start">
          <q-card
            class="row col-md-8 col-xs-12 q-py-md q-gutter-xs"
            flat
          >
            <div class="row col-md-6 q-pl-xs">
              <div class="col-md-12 col-xs-12 text-h6">
                Nº de ingressos:
              </div>
              <div class="col-md-3 col-xs-12 text-h6">
                {{qnt}}
              </div>
              <div class="col-md-12 col-xs-12 text-h6">
                total a pagar (R$):
              </div>
              <div class="col-md-3 col-xs-12 text-h6">
                {{price}}
              </div>
            </div>
            <q-separator vertical />
            <div class="row justify-end col-md-5 col-xs-12 q-gutter-md">
              <q-btn
                @click="addQntd()"
                class="col-md-10"
                color="green"
              >
                Adicionar
              </q-btn>
              <q-btn
                @click="rmQntd()"
                class="col-md-10"
                color="red"
              >
                Remover
              </q-btn>
            </div>
          </q-card>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'RevisaoIngressos',
  data () {
    return {
      qnt: 1,
      price: 49.50
    }
  },
  methods: {
    addQntd () {
      this.qnt++
      this.price = this.price + 49.50
    },
    rmQntd () {
      if (this.qnt > 0) {
        this.qnt--
        this.price = this.price - 49.50
      }
    }
  }
}
</script>

<style>
</style>
