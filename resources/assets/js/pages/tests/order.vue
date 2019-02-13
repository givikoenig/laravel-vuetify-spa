<template>
  <v-container fluid text-xs-center>
    <h2 class="font-weight-thin text-uppercase">Order</h2>

    <v-layout row mt-4>
      <v-flex xs6 order-lg2>
        <v-card dark tile flat color="error">
          <v-card-text>#1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card dark tile flat color="red darken-4">
          <v-card-text>#2</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs4 order-md2 order-xs1>
        <v-card dark tile flat color="red lighten-1">
          <v-card-text>#1</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md3 order-xs2>
        <v-card dark tile flat color="red lighten-2">
          <v-card-text>#2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md1 order-xs3>
        <v-card dark tile flat color="red darken-1">
          <v-card-text>#3</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    name: 'test-order-vew',
    layout: 'test',
    data () {
      return {}
    }
  }
</script>

