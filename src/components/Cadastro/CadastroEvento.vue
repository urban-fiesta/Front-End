<template>
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
        v-model="dadosEvento.name"
        hint="Insira o nome do evento*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor insira nome do evendo']"
      />
      <q-input
        filled
        type="date"
        v-model="dadosEvento.date"
        hint="Insira a data do evento"
        lazy-rules
        :rules="[
        val => val !== null && val !== '' || 'Por favor insira a data do evento']"
      />
      <q-input
        filled
        v-model="dadosEvento.local"
        hint="Insira as informações do local*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor insira as informações do local']"
      />
      <q-input
        filled
        v-model="dadosEvento.start"
        type="time"
        hint="Insira o horário inicial do evento*"
        lazy-rules
        :rules="[ val => val && val !== null || 'Por favor insira o horário do evento']"
      />
      <q-input
        filled
        v-model="dadosEvento.finish"
        type="time"
        hint="Insira o horário final do evento*"
        lazy-rules
        :rules="[ val => val && val !== null || 'Por favor insira o horário do evento']"
      />
      <q-input
        filled
        v-model="dadosEvento.price"
        type="number"
        prefix="R$"
        hint="Insira o preço do ingresso"
        lazy-rules
        :rules="[
        val => val !== null || 'Por favor insira o preço']"
      />
      <q-input
        filled
        v-model="dadosEvento.age_limit"
        type="number"
        hint="Insira o o limite de idade"
        lazy-rules
        :rules="[
        val => val !== null || 'Por favor uma idade válida']"
      />
      <q-input
        filled
        v-model="dadosEvento.description"
        type="textarea"
        hint="Insira uma descrição para o evento*"
        lazy-rules
        :rules="[
        val => val !== null || 'Por favor insira alguma descrição'
        ]"
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
</template>

<script>
import CadastroEventoService from '../../services/CadastroEventoService/CadastroEventoService'

export default {
  data () {
    return {

      form: false,
      dadosEvento: {
        id: 2,
        name: null,
        date: null,
        local: null,
        start: null,
        finish: null,
        price: null,
        description: null,
        age_limit: null,
        tag_list: ['opa'],
        event_photo: 'photo.png'

      },
      accept: false,
      data: {}
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

    async submit () {
      try {
        this.data = await CadastroEventoService.create(this.dadosEvento)
        console.log('ó: ' + this.data)
      } catch (error) {
        console.log(error)
      }
      this.$q.notify({
        message: 'Cadastro efetuado com sucesso!',
        color: 'green-4',
        icon: 'check'
      })
    },

    error () {
      this.$q.notify({
        message: 'Você deve aceitar os termos de uso!',
        color: 'red',
        icon: 'error'
      })
    },

    onReset () {
      this.dadosEvento.nome = null
      this.dadosEvento.data = null
      this.dadosEvento.local = null
      this.dadosEvento.horarioComeco = null
      this.dadosEvento.horarioFim = null
      this.dadosEvento.preco = null
      this.dadosEvento.descricao = null
      this.dadosEvento.censuraIdade = null
    }
  }
}
</script>
