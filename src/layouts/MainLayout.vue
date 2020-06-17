<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
            No 12
        </q-toolbar-title>

          <q-breadcrumbs>
            <q-breadcrumbs-el
            :label="this.$route.name" />
          </q-breadcrumbs>

      <q-btn to="/login" flat round dense icon="account_circle" class="q-mr-xs" />
      </q-toolbar>
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
import { mapState, mapActions } from 'vuex'
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
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
        },
        {
          title: 'Thiago Augusto Souza Silva Gay'
        }
      ]
    }
  },
  computed: {
    ...mapState('example', ['location']),
    nomePaginaAtual () {
      return this.$route.name
    }
  },
  methods: {
    ...mapActions('example', ['mudarLocation'])
  }
}
</script>
