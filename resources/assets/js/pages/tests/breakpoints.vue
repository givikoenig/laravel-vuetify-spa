<template>
  <div>
    <v-container text-xs-center>
      <h2 class="font-weight-thin text-uppercase">Row and column breakpoints</h2>
    </v-container>

    <v-container grid-list-xl>
      <v-layout v-bind="binding">
        <v-flex>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card dark color="blue lighten-2">
            <v-card-text>two</v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card dark color="accent">
            <v-card-text>three</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container my-3>
      <div>
        <v-tabs
          v-model="tabs"
          dark
          slider-color="pink lighten-4"
        >
          <v-tab ripple href="#tab-1">
            Template
          </v-tab>
          <v-tab ripple href="#tab-2">
              Script
          </v-tab>
          <v-tab-item value="tab-1">
            <v-card dark tile flat>
              <v-card-text >
                <highlight-code lang="vue">{{ code }}</highlight-code>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-card dark tile flat>
              <v-card-text >
                <highlight-code lang="javascript">{{ jcode }}</highlight-code>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-container>

  </div>
</template>

<script>
  export default {
    name: 'test-layout-vew',
    layout: 'test',
    data: () => ({
      tabs: null,
      code: `<template>
    <v-container grid-list-xl>
      <v-layout v-bind="binding">
        <v-flex>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card dark color="blue lighten-2">
            <v-card-text>two</v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card dark color="accent">
            <v-card-text>three</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>`,
      jcode: `export default {
    computed: {
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

        return binding
      }
    }
  }`
    }),
    computed: {
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

        return binding
      }
    }
  }
</script>

