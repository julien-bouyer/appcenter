import Vue from 'vue';
import Vuex from 'vuex';

import files from '@/store/file/file.store.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    files,
  }
});
