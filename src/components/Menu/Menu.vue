<template>
  <div>
    <q-item>
      <q-card>
        <div class="row justify-around">
          <div class="row col-md-5 col-xs-12">
            <img class="col-md-12 col-xs-12 q-pt-sm" style="max-height:97%;" src="https://cdn.quasar.dev/img/mountains.jpg">
          </div>
          <div class="col-md-6 col-xs-12 q-gutter-md">
            <div class="text-h6 col-xs-12">Caipirinha Woodstock</div>
            <div class="text-subtitle2 col-xs-12">
              Especial Caipirinha Woodstock, feita com limão siciliano,
              açúcar, vodca hoskov, gelo importado diretamente dos montes
              do Himalaia
            </div>
            <div class="row justify-around">
              <q-btn
                class="col-md-5"
                color="white"
                text-color="black"
                label="Adicionar"
                @click="AdicionarProduto()"/>
              <q-btn
                class="col-md-5"
                color="white"
                text-color="black"
                label="Remover"
                :disable="qnt == 0"
                @click="RemoverProduto()"/>
            </div>
            <div class="row justify-around">
              <q-chip dense class="col-md-5">Preço: R$ {{ price }}</q-chip>
              <q-chip dense class="col-md-5">itens x {{ qnt }} </q-chip>
            </div>
          </div>
        </div>
      </q-card>
    </q-item>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'MenuPage',
  props: ['price'],
  data () {
    return {
      qnt: 0
    }
  },
  methods: {
    AdicionarProduto () {
      this.somaPreco(parseFloat(this.price))
      this.adicionaItem()
      if (this.qnt > 0) {
        this.toggleHUD()
        console.log(this.show_total)
      }
      this.qnt++
    },
    RemoverProduto () {
      this.diminuirPreco(parseFloat(this.price))
      if (this.qnt > 0) {
        this.retiraItem()
        this.qnt--
      } else if (this.qnt === 0) {
        this.toggleHUD()
        console.log(this.show_total)
      }
    },
    ...mapActions('example', ['adicionaItem', 'retiraItem', 'somaPreco', 'diminuirPreco', 'toggleHUD'])
  },
  computed: {
    ...mapState('example', ['total_de_itens', 'total_a_pagar', 'show_total'])
  }
}
</script>

<style>

</style>
