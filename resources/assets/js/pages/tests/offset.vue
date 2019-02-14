<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <h2 class="font-weight-thin text-uppercase">Offsets</h2>

      <v-layout row wrap mt-5>
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

    <v-container my-3>
      <v-layout align-center justify-center row>
        <v-flex xs12>
          <v-card dark tile flat>
            <v-btn dark flat class="underlined">Template</v-btn>
            <v-card-text >
              <highlight-code lang="vue">{{ code }}</highlight-code>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
  export default {
    name: 'test-offset-vew',
    layout: 'test',
    data: () => ({
        code: `<template>
    <v-container grid-list-md text-xs-center>
      <h2 class="font-weight-thin text-uppercase">Offsets</h2>
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
</template>`
    })
  }
</script>
