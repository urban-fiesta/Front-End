<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md row justify-center">
      <div class="col-md-5 col-xs-10">
        <q-img src="../../assets/img/logo1.png"/>
      </div>
      <div class="col-md-10 col-xs-10">
        <q-input
        rounded
        standout="bg-primary"
        v-model="perfil.email"
        type="email"
        prefix="Email:"
        bg-color="grey-2"
        >
          <template v-slot:prepend>
            <q-icon name="mail" />
          </template>
        </q-input>
      </div>
      <div class="col-md-10 col-xs-10">
        <q-input
        rounded
        standout="bg-primary"
        v-model="perfil.senha"
        type="password"
        prefix="Senha:"
        bg-color="grey-2">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>
      <div class="col-md-10 col-xs-10">
        <q-btn to="/dashboard" type="submit" :loading="submitting" label="Entrar" class="q-mt-md" color="primary" rounded>
      </q-btn>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      perfil: {
        email: '',
        senha: ''
      }
    }
  }
}
</script>

<style scoped>
</style>
