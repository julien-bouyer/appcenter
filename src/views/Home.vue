<template>
  <div>
    <h2 class="welcome">Welcome</h2>
    <div class="row">
      <div class="col-md-12">
        <ul class="list-group">
          <li class="list-group-item">Name : {{ user.name }}</li>
          <li class="list-group-item">Email : {{ user.email }}</li>
        </ul>
      </div>
    </div>
    <div class="row mt-md-3">
      <div class="col-md-12">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <router-link to="/users">Users list</router-link>
          </li>
          <li class="list-group-item">
            <router-link to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem('jwt');
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>

<style scoped lang="scss">
h2.welcome {
  font-family: 'Teko';
  font-weight: 200;
}
.list-group-flush {
  .list-group-item {
    background: none;
  }
}
</style>
