import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import axios from 'axios';
import UUID from 'vue-uuid';
import 'bootstrap/dist/css/bootstrap.css';

const base = axios.create({
  baseURL: 'http://localhost:4000/api',
});
 
Vue.prototype.$http = base;
Vue.config.productionTip = false;

Vue.use(UUID);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
