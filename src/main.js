import Vue from 'vue'
import App from './App.vue'
import AtComponents, { Dialog } from 'at-ui'

import 'at-ui-style'

Vue.use(AtComponents)

Vue.prototype.$modal = Dialog

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
