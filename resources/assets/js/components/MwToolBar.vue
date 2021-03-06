<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      fixed
      right
      app
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-btn
                icon
                @click.stop="toggleDrawer"
              >
                <v-icon v-if="mini">chevron_left</v-icon>
                <v-icon v-else>chevron_right</v-icon>
              </v-btn>
            </v-list-tile-action>
            <v-list-tile-content v-if="authenticated">
              <v-list-tile-title>{{user.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <!-- Authenticated -->
        <template v-if="authenticated">
          <v-list-tile @click="goWelcome">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ appName }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="goProfile">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{user.name}} Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{$t('logout')}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <!-- Guest -->
        <template v-else>
          <v-list-tile @click="goWelcome">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ appName }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="goLogin">
            <v-list-tile-action>
              <v-icon>lock</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="goRegister">
            <v-list-tile-action>
              <v-icon>face</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Registration</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <v-divider></v-divider>

        </v-list>

    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    props: {
      drawer: {
        type: Boolean,
        required: true
      },
      mini: {
        type: Boolean,
        required: true
      }
    },

    data: () => ({
      appName: window.config.appName,
      busy: false,
      path: ''
    }),

    computed: mapGetters({
      user: 'authUser',
      authenticated: 'authCheck'
    }),

    methods: {
      goWelcome () {
        this.$router.push({name: 'welcome'})
      },
      goProfile () {
        this.$router.push({name: 'settings.profile'})
      },
      goLogin () {
        this.$router.push({name: 'login'})
      },
      goRegister () {
        this.$router.push({name: 'register'})
      },
      toggleDrawer () {
        this.$emit('toggleDrawer')
      },
      async logout () {
        this.busy = true

        if (this.drawer) {
          this.toggleDrawer()
        }

        // Log out the user.
        await this.$store.dispatch('logout')
        this.busy = false

        // Redirect to login.
        this.$router.push({ name: 'login' })
      }
    }

  }
</script>
