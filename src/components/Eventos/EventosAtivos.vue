<template>
  <q-card-section>
    <q-table
      dark
      bordered
      :columns="columns"
      :filter="filter"
      :data="data.data"
      title="Eventos Cadastrados"
      row-key="name"
      color="primary"
      class="col-md-12 q-pb-md"
    >

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn size="sm" color="accent" round dense @click="props.expand = !props.expand" :icon="props.expand ? 'remove' : 'add'" />
          </q-td>
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </q-card-section>
</template>

<script>
import CadastroEventoService from '../../services/CadastroEventoService/CadastroEventoService'

export default {
  name: 'EventosAtivos',
  data () {
    return {
      filter: '',
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Nome do Evento',
          align: 'center',
          field: row => row.name,
          sortable: true
        },
        { name: 'start', align: 'center', label: 'Hora de início', field: 'start', sortable: true },
        { name: 'finish', align: 'center', label: 'Hora de final', field: 'finish', sortable: true },
        { name: 'date', align: 'center', label: 'Data de início', field: 'date' },
        { name: 'local', align: 'center', label: 'Local do evento', field: 'local' },
        { name: 'price', align: 'center', label: 'Preço do ingresso', field: 'price' },
        { name: 'ageLimit', align: 'center', label: 'Idade mínima', field: 'ageLimit' }
      ],
      data: []
    }
  },
  mounted () {
    this.dataGet()
  },
  methods: {
    async dataGet () {
      this.data = await CadastroEventoService.list()
    }
  }
}
</script>

<style>

</style>
