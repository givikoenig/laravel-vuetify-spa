<template>
  <div>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            {{ name }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list>
      <v-list-group
      prepend-icon="pan_tool"
      value="true"
    >
      <v-list-tile slot="activator">
        <v-list-tile-title>Tests</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        no-action=""
        sub-group=""
        value="true"
      >

        <v-list-tile slot="activator">
          <v-list-tile-title>Grid</v-list-tile-title>
        </v-list-tile>

        <v-list>
           <v-list-tile
            value="true"
            v-for="(test, i) in tests.grid"
            :key="i"
            :to="test.route"
          >
            <v-list-tile-action>
              <v-icon v-html="test.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="test.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

      </v-list-group>

    </v-list-group>
    </v-list>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: this.$t('tests_menu_title'),
        tests: {
          grid: [
            { title: 'Layout grid system', icon: 'grid_on', route: { name: 'layout' } },
            { title: 'Offsets', icon: 'line_style', route: { name: 'offset' } },
            { title: 'Order', icon: 'format_line_spacing', route: { name: 'order' } },
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .v-list__tile__title{
    color: #fff;
  }
  .v-list__tile--active .v-list__tile__action:first-of-type .v-icon,
  .v-list__tile--active .v-list__tile__title {
    color: pink;
  }
</style>
