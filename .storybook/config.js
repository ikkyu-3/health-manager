import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.min.css'
import { configure, addDecorator } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
})

const store = new Vuex.Store({
  state: () => ({ currentPage: 'Hoge' })
})

const router = new VueRouter({ routes: [{ path: '/'}] })

const vuetifyConfig = new Vuetify({
  icons: {
    iconfont: 'fa'
  },
  theme: {
    dark: false
  }
})

addDecorator(() => {
  return {
    router,
    store,
    vuetify: vuetifyConfig,
    created: function() {
      this.$root.$store = this.$store;
      this.$root._route = this.$route;
      this.$root._router = router;
      this.$root.$vuetify = this.$vuetify;
    },
    template: '<v-app><div><story/></div></v-app>'
  }
})

// automatically import all files ending in *.stories.js
const req = require.context('../', true, /\.stories\.ts$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
