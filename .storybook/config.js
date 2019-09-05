import { configure, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const vuetifyConfig = new Vuetify({
  theme: {
    dark: false
  }
})

addDecorator(() => ({
  vuetify: vuetifyConfig,
  template: '<v-app><story/></v-app>'
}))

// automatically import all files ending in *.stories.js
const req = require.context('../', true, /\.stories\.ts$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
