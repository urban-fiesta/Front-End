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
        <q-btn
          icon="account_circle"
          flat
          label="Entrar"
          to="/login"
        />
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
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
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
          title: 'Docs',
          caption: 'quasar.dev',
          icon: 'school',
          link: 'https://quasar.dev'
        },
        {
          title: 'Github',
          caption: 'github.com/quasarframework',
          icon: 'code',
          link: 'https://github.com/quasarframework'
        },
        {
          title: 'Discord Chat Channel',
          caption: 'chat.quasar.dev',
          icon: 'chat',
          link: 'https://chat.quasar.dev'
        },
        {
          title: 'Forum',
          caption: 'forum.quasar.dev',
          icon: 'record_voice_over',
          link: 'https://forum.quasar.dev'
        },
        {
          title: 'Twitter',
          caption: '@quasarframework',
          icon: 'rss_feed',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Facebook',
          caption: '@QuasarFramework',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Quasar Awesome',
          caption: 'Community Quasar projects',
          icon: 'favorite',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  }
}
</script>

<style>
</style>
