import Vue from 'vue'
import Vuetify from 'vuetify'

import VueHighlightJS from 'vue-highlight.js';
// Highlight.js languages
import javascript from 'highlight.js/lib/languages/javascript'
import vue from 'vue-highlight.js/lib/languages/vue'
import http from 'highlight.js/lib/languages/http'

import 'highlight.js/styles/darcula.css'

import store from '~/store'
import router from '~/router'
import { i18n } from '~/plugins'
import App from '~/components/App'
import '~/components'

Vue.use(Vuetify)

Vue.use(VueHighlightJS, {
  languages: {
    javascript,
    vue,
    http
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  store,
  router,
  ...App
})
