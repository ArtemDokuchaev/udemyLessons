import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import VueRecource from 'vue-resource'

import {routes} from './routes'
import {store} from './store/store'

Vue.use(VueRouter);
Vue.use('vuex');
Vue.use(VueRecource);

Vue.http.options.root = "https://vuejs-http-11515.firebaseio.com/";

Vue.filter('currency', (value) => {
	return '$' + value.toLocaleString();
});

const router = new VueRouter({
	mode: 'history',
	routes
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
