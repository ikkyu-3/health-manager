import { configure, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueCompositionApi from "@vue/composition-api";

Vue.use(VueCompositionApi);
Vue.use(Vuetify)

const vuetifyConfig = new Vuetify({
  icons: {
    iconfont: 'fa'
  },
  theme: {
    dark: false
  }
})

addDecorator(() => ({
  vuetify: vuetifyConfig,
  template: '<v-app><div><story/></div></v-app>'
}))

// automatically import all files ending in *.stories.js
const req = require.context('../', true, /\.stories\.ts$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
