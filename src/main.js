import Vue from 'vue'
import App from './App'
import router from './router'

import 'bulma/css/bulma.css'
import 'sweetalert/dist/sweetalert.css'

import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

if(process.env.NODE_ENV === 'production'){
	Vue.use(VueAnalytics, {
	  id: 'UA-83009418-2',
	  router
	})
}

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
