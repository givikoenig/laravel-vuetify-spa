<template>
  <v-app>
    <mw-tool-bar @toggleDrawer="mini=!mini" :drawer="drawer" :mini="mini"></mw-tool-bar>
    <v-content>
      <v-container fluid
      >
        <v-layout  align-center row wrap>
            <v-flex xs12>
                <v-card>
                  <v-responsive :aspect-ratio="16/9">
                    <v-card-text>
                      This card will always be 16:9 (unless you put more stuff in it)
                    </v-card-text>
                  </v-responsive>
                </v-card>
            </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MwToolBar from '~/components/MwToolBar.vue'

  export default {
    name: 'mw-view',
    layout: 'default',
    metaInfo () {
      return { title: this.$t('mw') }
    },
    components: {
      'mw-tool-bar': MwToolBar
    },
    computed:
      mapGetters({
        user: 'authUser',
        authenticated: 'authCheck'
      }),
    data: () => ({
      drawer: true,
      mini: true
    })
  }
</script>

<style scoped>
  .rc {
    width: 20px;
    overflow: hidden;
    right: 0;
  }
</style>
