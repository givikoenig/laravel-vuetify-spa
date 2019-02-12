<template>
  <v-container grid-list-md text-xs-center>
    <h2 class="font-weight-thin text-uppercase">Offsets</h2>
    <v-btn fab small dark color="brown darken-3" class="toggle-drawer" @click.stop="toggleDrawer">
      <v-icon dark v-if="drawer">chevron_right</v-icon>
      <v-icon dark v-else>chevron_left</v-icon>
    </v-btn>


    <v-layout row wrap>
      <v-flex xs10 offset-xs1>
        <v-card dark color="purple">
          <v-card-text>xs10 offset-xs1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs7 offset-xs5 offset-md2 offset-lg5>
        <v-card dark color="blue lighten-2">
          <v-card-text>xs7 offset-(xs5 | md2 | lg5)</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 md3>
        <v-card dark color="primary">
          <v-card-text>(xs12 | sm5 | md3)</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm5 md5 offset-xs0 offset-lg2>
        <v-card dark color="green">
          <v-card-text>(xs12 | sm5 | md5) offset-(xs0 | lg2)</v-card-text>
        </v-card>
      </v-flex>

    </v-layout>

  </v-container>
</template>

<script>

  export default {
    name: 'test-offset-vew',
    layout: 'test',
    props: {
      drawer: {
        type: Boolean,
        required: true
      }
    },

    methods: {
      toggleDrawer () {
        this.$emit('toggleDrawer')
      }
    },
  }
</script>

<style scoped>
  .toggle-drawer {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .item {
    min-height: 50px;
    min-width: 80px;
    margin: 10px;
  }
</style>
