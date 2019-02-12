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
    <v-divider></v-divider>
    <v-list>
      <v-list-tile
        value="true"
        v-for="(item, i) in items"
        :key="i"
        :to="item.route"
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-tile
        value="true"
        v-for="(test, i) in tests"
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

  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: this.$t('tests_menu_title'),
        items: [
          { title: 'Dashboard', icon: 'dashboard', route: { name: 'home' } },
          { title: 'Account', icon: 'account_box', route: { name: 'settings.profile' } }
        ],
        tests: [
          { title: 'Layout grid', icon: 'grid_on', route: { name: 'layout' } },
          { title: 'Offsets', icon: 'transform', route: { name: 'offset' } },
        ]
      }
    }
  }
</script>

<style scoped>
  .v-list__tile__title {
    color: #fff;
  }
  .v-list__tile--active .v-list__tile__action:first-of-type .v-icon,
  .v-list__tile--active .v-list__tile__title {
    color: pink;
  }

</style>
