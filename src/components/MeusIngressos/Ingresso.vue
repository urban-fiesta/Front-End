<template>
  <div class="q-pa-md q-gutter-sm col justify-around">
    <q-card
      v-for="ingresso in ingressos"
      :key="ingresso.id"
      class="my-card"
    >
      <q-card-section horizontal>
        <q-expansion-item
          class="col-md-11 col-xs"
          label="nome da festa"
        >
          <q-img
            :src="url"
            spinner-color="white"
            style="height: 140px; max-width: 150px"
          />
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

export default {
  data () {
    return {
      ingressos: [
        // Teste do 'for'
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' },
        { id: '7' }
      ]
    }
  }
}
</script>
