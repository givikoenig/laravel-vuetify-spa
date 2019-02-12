<template>
  <v-app light>
    <v-navigation-drawer
      dark
      v-if="authenticated"
      persistent
      v-model="drawer"
      right
      app
    >
    <test-menu></test-menu>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid class="mt-3">
        <router-view v-on:toggleDrawer="drawer = !drawer" :drawer="drawer"></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {mapGetters} from 'vuex'

  import TestMenu from '~/components/TestMenu'

  export default {
    computed: mapGetters({
      authenticated: 'authCheck'
    }),

    components: {
      TestMenu
    },

    data () {
      return {
        drawer: false
      }
    }
  }
</script>
