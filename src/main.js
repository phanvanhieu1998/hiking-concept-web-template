import Vue from 'vue'
import App from './App.vue'
import VueMdijs from 'vue-mdijs'
import { mdiMagnify } from '@mdi/js'

VueMdijs.add({ mdiMagnify })
Vue.use(VueMdijs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
