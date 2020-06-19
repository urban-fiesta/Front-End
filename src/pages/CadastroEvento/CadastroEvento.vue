<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Cadastro</div>
      </q-card-section>

      <q-form
        @submit="Cadastrar"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="dadosEvento.name"
          hint="Insira o nome do evento *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor insira nome do evendo']"
        />
        <q-input
          filled
          v-model="dadosEvento.horario"
          type="time"
          hint="Insira o horário do evento *"
          lazy-rules
          :rules="[ val => val && val !== null || 'Por favor insira o horário do evento']"
        />
        <q-input
          filled
          type="date"
          v-model="dadosEvento.data"
          hint="Insira a data do evento"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || 'Por favor insira a data do evento']"
        />
        <q-input
          filled
          v-model="dadosEvento.local"
          hint="Insira as informações do local *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor insira as informações do local']"
        />
        <q-input
          filled
          v-model="dadosEvento.preco"
          type="number"
          prefix="R$"
          hint="Insira o preço da entrada"
          lazy-rules
          :rules="[
          val => val !== null || 'Por favor insira o preço']"
        />
        <q-uploader
          url="http://localhost:4444/upload"
          label="Envie uma foto do evento"
          color="primary"
          square
          flat
          accept="jpg, png"
          bordered
          style="max-width: 300px"
        />
        <q-toggle
          v-model="accept"
          label="Eu concordo com os termos de uso"
        />

        <div>
          <q-btn
            @click="onSubmit()"
            label="Cadastrar"
            type="submit"
            color="primary"
          />
          <q-btn
            label="Começar novamente"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </q-card>

  </div>
</template>
<script>
export default {
  data () {
    return {

      form: false,
      dadosEvento: {

        nome: null,
        horario: null,
        data: null,
        censuraDeIdade: null,
        preco: null,
        local: null,
        descricao: null

      },
      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.error()
      } else {
        this.submit()
      }
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
      this.dadosEvento.nome = null
      this.dadosEvento.horario = null
      this.dadosEvento.data = null
      this.dadosEvento.censuraDeIade = null
      this.dadosEvento.preco = null
      this.dadosEvento.local = null
      this.dadosEvento.descricao = null
    }
  }
}
</script>
