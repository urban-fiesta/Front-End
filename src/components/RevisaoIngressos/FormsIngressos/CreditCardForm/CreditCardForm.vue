<template>
  <div>
    <div class="row q-py-md justify-center">
      <div
        class="col-md-11 text-h5"
        style="color: white"
      >
        <p>Dados do pagamento</p>
      </div>
    </div>
    <div>
      <q-card class="row col-md-7 q-py-xs q-gutter-md">
        <q-form
          @submit="onSubmit"
          class="row col-md-7 q-py-xs q-gutter-md"
        >

          <div class="col-md-11 col-xs-12">
            <q-input
              filled
              v-model="cartao"
              outlined
              label="Número do cartão *"
              mask="#### #### #### ####"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Por favor insira o número do cartão!']"
            ></q-input>
          </div>
          <div class="col-md-11 col-xs-12">
            <q-input
              filled
              v-model="nome"
              outlined
              label="Nome do titular *"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Por favor insira o nome do titular do cartão!']"
            ></q-input>
          </div>
          <div class="row col-md-11 q-gutter-sm">
            <div class="col-md-3 col-xs-9">
              <q-select
                filled
                v-model="data"
                :options="date"
                label="Mês"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Por favor insira o dia de vencimento!']"
              />
            </div>
            <div class="col-md-3 col-xs-9">
              <q-select
                filled
                v-model="ano"
                :options="year"
                label="Ano"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Por favor insira o ano de vencimento!']"
              />
            </div>
            <div class="col-md-3 col-xs-9">
              <q-input
                label="CVV *"
                v-model="cvv"
                outlined
                mask="###"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Por favor insira o código de segurança!']"
              ></q-input>
            </div>
          </div>
          <div>
            <q-btn
              type="submit"
              label="Pagar"
              color="primary"
              @click="dataSend()"
            />
          </div>
        </q-form>
      </q-card>
    </div>
  </div>
</template>

<script>
import CreditCardFormService from '../../../../services/CreditCardFormService/CreditCardFormService'
import { date } from 'quasar'

export default {
  name: 'CreditCardForm',
  data () {
    return {
      date: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      year: [
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026,
        2027,
        2028,
        2029,
        2030],

      data: null,
      ano: null,
      nome: null,
      cartao: null,
      cvv: null,
      dadosMocados: {
        name: 'Festival 2 anos woodstock',
        price: 148.5,
        date: Date.now(),
        time: Date.now()
      }
    }
  },
  methods: {
    onSubmit () {
      this.$q.notify({
        message: 'Compra efetuada com sucesso!',
        color: 'green-4',
        icon: 'check',
        position: 'center'
      })
    },
    async dataSend () {
      const _dadosMocados = {
        ...this.dadosMocados,
        time: date.formatDate(this.dadosMocados.time, 'YYYY-MM-DDTHH:mm:ss.SSSZ'),
        date: date.formatDate(this.dadosMocados.date, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
      }
      this.data = await CreditCardFormService.create(_dadosMocados)
      console.log(_dadosMocados)
    }
  }
}

</script>
