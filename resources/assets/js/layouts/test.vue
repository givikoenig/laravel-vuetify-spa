<template>
  <v-app light>
    <v-navigation-drawer
      dark
      v-if="authenticated"
      persistent
      v-model="drawer"
      width="350"
      app
    >
    <test-menu></test-menu>
    </v-navigation-drawer>
    <test-tool-bar v-on:toggleDrawer="drawer = !drawer" :drawer="drawer"></test-tool-bar>
    <v-content>
      <v-container fluid class="mt-3">
        <transition name="page" mode="out-in">
          <router-view v-on:toggleDrawer="drawer = !drawer" :drawer="drawer"></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {mapGetters} from 'vuex'

  import TestMenu from '~/components/TestMenu'
  import TestToolBar from '~/components/TestToolBar'

  export default {
    computed: mapGetters({
      authenticated: 'authCheck'
    }),

    components: {
      TestMenu,
      TestToolBar
    },

    data () {
      return {
        drawer: true
      }
    }
  }
</script>
