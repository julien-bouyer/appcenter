import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import axios from 'axios';
import UUID from 'vue-uuid';

const base = axios.create({
  baseURL: process.env.VUE_APP_NODE_URL,
});
 
Vue.prototype.$http = base;
Vue.config.productionTip = false;

Vue.use(UUID);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
