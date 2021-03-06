import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './plugins/router'

Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
