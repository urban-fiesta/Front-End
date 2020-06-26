<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <!-- <div class="row no-wrap shadow-1"> -->
      <q-toolbar class="col-md-9">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          No 12 / {{ this.$route.name }}
        </q-toolbar-title>
        <!-- <q-btn
          icon="account_circle"
          flat
          label="Entrar"
          to="/login"
          :class="hidden"
          @click="esconderLogin()"
        /> -->
      </q-toolbar>
      <q-toolbar
        v-show="total_de_itens !== 0"
        class="row col-md-3 bg-green"
      >
        <div class="col-md-5">
          <div class="text-subtitle2">
            Total de itens x {{ total_de_itens }}
          </div>
        </div>
        <div class="col-md-7">
          <div class="text-subtitle2">
            Total a pagar: R$ {{ total_a_pagar }}
          </div>
        </div>
      </q-toolbar>
      <!-- </div> -->
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
        bordered
        padding
        class="rounded-borders text-primary"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Links essenciais
        </q-item-label>
        <!-- <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        /> -->
        <q-item
          clickable
          v-ripple
          :to="link.to"
          v-for="link in essentialLinks"
          :key="link.title"
        >
        <q-item-section thumbnail>
          <q-icon color="primary" :name="link.icon" class="q-pl-sm"/>
        </q-item-section>
        <q-item-section>
          {{ link.title }}
        </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'
// import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    // EssentialLink
  },
  computed: {
    ...mapState('example', ['total_de_itens', 'total_a_pagar', 'show_total']),
    nomePaginaAtual () {
      return this.$route.name
    }
  },
  methods: {
  },
  data () {
    return {
      show: true,
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Login',
          icon: 'person',
          to: '/login'
        },
        {
          title: 'Cadastrar evento',
          icon: 'insert_invitation',
          to: '/cadastro'
        },
        {
          title: 'Eventos Cadastrados',
          icon: 'event_available',
          to: '/dashboard'
        },
        {
          title: 'Meus Ingressos',
          icon: 'confirmation_number',
          to: '/meus-ingressos'
        }
      ]
    }
  }
}
</script>

<style>
</style>
