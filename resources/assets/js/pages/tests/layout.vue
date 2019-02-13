<template>
  <v-container grid-list-md text-xs-center>
    <h2 class="font-weight-thin text-uppercase">Layout grid system</h2>

    <v-layout row wrap mt-4>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text>12</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 2" :key="`6${i}`" xs6>
        <v-card dark color="blue lighten-2">
          <v-card-text>6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i of 3" :key="`4${i}`" xs4>
        <v-card dark color="primary">
          <v-card-text>4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i of 4" :key="`3${i}`" xs3>
        <v-card dark color="blue lighten-2" >
          <v-card-text>3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i of 6" :key="`2${i}`" xs2>
        <v-card dark color="primary">
          <v-card-text>2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i of 12" :key="`${i}`" xs1>
        <v-card dark color="blue lighten-2">
          <v-card-text>1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout align-center justify-center column>
      <div class="item elevation-5"></div>
      <div class="item elevation-5"></div>
      <div class="item elevation-5"></div>
    </v-layout>

  </v-container>
</template>

  <script>
    export default {
      name: 'test-layout-vew',
      layout: 'test',
      data () {
        return {}
      }
    }
  </script>

<style scoped>
  .item {
    min-height: 50px;
    min-width: 80px;
    margin: 10px;
  }
</style>
