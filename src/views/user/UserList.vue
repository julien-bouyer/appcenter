<template>
  <div>
    <h2>Users list</h2>
    <div class="row">
      <div class="col-md-12">
        <div class="actions">
          <router-link :to="{ name: 'UserForm' }" class="btn btn-link">Add</router-link>
        </div>
      </div>
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="user._id" v-for="(user, index) in users">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ getRole(user.role) }}</td>
              <td class="p-1">
                <router-link :to="{ name: 'UserForm', params: { id: user._id } }" class="btn btn-link">Edit</router-link>
                <!-- <button class="btn btn-link" @click="remove(user._id)">Delete</button> -->
                <button class="btn btn-link" @click="clearTokens(user._id)">Clear tokens</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import userService from '@/services/user.service.js';
import roleService from '@/services/role.service.js';
import { mapGetters } from 'vuex';

export default {
  beforeRouteEnter(route, redirect, next) {
    next(vm => vm.$store.dispatch('users/fetch'));
  },
  computed: {
    ...mapGetters('users', {
      users: 'getUsers',
    }),
  },
  methods: {
    // remove(id) {
    //   userService
    //     .remove(id)
    //     .then(() => this.refresh())
    //     .catch(console.error);
    // },
    clearTokens(id) {
      userService
        .clearTokens(id)
        .then(() => this.refresh())
        .catch(console.error);
    },
    refresh() {
      this.$store.dispatch('users/fetch');
    },
    getRole(role) {
      return roleService.getRole(role);
    },
  },
};
</script>
