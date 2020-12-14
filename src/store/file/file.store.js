import fileService from '@/services/file.service.js';

const state = {
  files: [],
};

const getters = {
  getFiles: (state) => state.files,
};

const actions = {
  fetch({ commit }) {
    fileService
      .fetch()
      .then((res) => commit('setFiles', res.data))
      .catch(console.error);
  },
};

const mutations = {
  setFiles(state, files) {
    state.files = files;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
