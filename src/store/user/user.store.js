import userService from '@/services/user.service.js';

const state = {
  users: [],
};

const getters = {
  getUsers: (state) => state.users,
};

const actions = {
  fetch({ commit }) {
    userService
      .fetch()
      .then((res) => commit('setUsers', res.data))
      .catch(console.error);
  },
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
