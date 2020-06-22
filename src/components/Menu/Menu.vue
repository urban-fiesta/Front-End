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
              <q-btn class="col-md-5" color="white" text-color="black" label="Adicionar" />
              <q-btn class="col-md-5" color="white" text-color="black" label="Remover" />
            </div>
            <div class="row justify-around">
              <q-chip dense class="col-md-5" label="R$ 15,00" />
              <q-chip dense class="col-md-5">itens x {{ qnt }} </q-chip>
            </div>
          </div>
        </div>
      </q-card>
    </q-item>
  </div>
</template>

<script>

export default {
  name: 'MenuPage',
  data () {
    return {
      qnt: 2
    }
  }
}
</script>

<style>

</style>
