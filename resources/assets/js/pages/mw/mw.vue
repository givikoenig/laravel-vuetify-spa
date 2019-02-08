<template>
  <div>
    <v-layout>
      ssssssssssss<br>
      ffffffffffff<br>
    </v-layout>
    <mw-tool-bar @toggleDrawer="mini=!mini" :drawer="drawer" :mini="mini"></mw-tool-bar>
  </div>
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
