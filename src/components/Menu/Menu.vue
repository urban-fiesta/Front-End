<template>
  <div>
    <q-list>
        <q-card>
          <q-item>
            <div class="row justify-around">
              <div class="row col-md-5 col-xs-12">
                <img class="col-md-12 col-xs-12" src="https://cdn.quasar.dev/img/mountains.jpg">
              </div>
              <div class="col-md-6 col-xs-12">
                <div class="text-h6 col-xs-12">Caipirinha Woodstock</div>
                <div class="text-subtitle2 col-xs-12">
                  Especial Caipirinha Woodstock, feita com limão siciliano,
                  açúcar, vodca hoskov, gelo importado diretamente dos montes
                  do Himalaia
                </div>
                <div class="row justify-around">
                  <q-btn class="col-md-5" color="white" text-color="black" label="Standard" />
                  <q-btn class="col-md-5" color="white" text-color="black" label="Standard" />
                </div>
                <div class="row justify-around">
                  <q-chip dense class="col-md-5" label="R$ 15,00" />
                  <q-chip dense class="col-md-5" label="itens x 1" />
                </div>
              </div>
            </div>
          </q-item>
          <q-separator inset />
        </q-card>
    </q-list>
  </div>
</template>

<script>

export default {
  name: 'MenuPage'
}
</script>

<style>

</style>
