import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueResource);
Vue.use(BootstrapVue);
import router from './router'

Vue.config.productionTip = false
// eslint-disable-next-line no-console
new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
