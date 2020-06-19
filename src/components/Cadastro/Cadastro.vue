<template>
  <div
    class="q-pa-md"
    style="max-width: 400px"
  >
    <q-dialog v-model="form">
      <q-card>
        <q-card-section>
          <div class="text-h6">Cadastro</div>
        </q-card-section>

        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="name"
            label="Insira seu nome *"
            hint="Nome completo"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Por favor insira seu nome']"
          />

          <q-input
            filled
            type="number"
            v-model="age"
            label="Insira sua idade *"
            lazy-rules
            :rules="[
          val => val !== null && val !== '' || 'Por favor insira sua idade',
          val => val > 0 && val < 100 || 'Insira uma idade válida'
        ]"
          />

          <q-toggle
            v-model="accept"
            label="Eu concordo com os termos de uso"
          />

          <div>
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
            />
            <q-btn
              label="Reset"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
      </q-card>
    </q-dialog>

  </div>
</template>
<script>
export default {
  data () {
    return {
      form: false,
      name: null,
      age: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        // alert('Você precisa aceitar os termos de uso')
        this.error()
      } else {
        this.submit()
        this.form = false
      }
    },

    openForm () {
      this.form = true
    },
    error () {
      this.$q.notify({
        message: 'Você deve aceitar os termos de uso!',
        color: 'red',
        icon: 'error'
      })
    },

    submit () {
      this.$q.notify({
        message: 'Cadastro efetuado com sucesso!',
        color: 'green-4',
        icon: 'check'
      })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>
