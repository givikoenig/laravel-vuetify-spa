<template>
  <div>
    <v-container text-xs-center>
      <h2 class="font-weight-thin text-uppercase">Direction and Align</h2>
    </v-container>

    <v-container grid-list-xl>
      <v-layout row justify-space-between>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="blue lighten-2">
            <v-card-text>two</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="accent">
            <v-card-text>three</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row justify-space-around>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="blue lighten-2">
            <v-card-text>two</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="accent">
            <v-card-text>three</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="blue lighten-2">
            <v-card-text>two</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="accent">
            <v-card-text>three</v-card-text>
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
    name: 'test-layout-vew',
    layout: 'test',
    data: () => ({
      code: `<template>
    <v-container grid-list-xl>
      <v-layout row justify-space-between>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="blue lighten-2">
            <v-card-text>two</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="accent">
            <v-card-text>three</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row justify-space-around>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="blue lighten-2">
            <v-card-text>two</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="accent">
            <v-card-text>three</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="blue lighten-2">
            <v-card-text>two</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="accent">
            <v-card-text>three</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
</template>`,
    })
  }
</script>


