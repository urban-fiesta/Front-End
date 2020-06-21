<template>
  <q-card-section>
    <q-table
      dark
      bordered
      hide-header
      :columns="columns"
      :filter="filter"
      :data="data"
      title="Eventos Cadastrados"
      row-key="name"
      color="primary"
      class="col-md-12 q-pb-md"
    >

      <template v-slot:top-right>
        <q-input rounded dense bg-color="grey-6" debounce="300" v-model="filter" label="Buscar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
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
            <q-btn color="primary">Desativar evento</q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-card-section>
</template>

<script>
export default {
  name: 'EventosAtivos',
  data () {
    return {
      filter: '',
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Nome do Evento',
          align: 'left',
          field: row => row.name,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65
        }
      ]
    }
  }
}
</script>

<style>

</style>
