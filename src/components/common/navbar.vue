<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="no-decoration">
        <app-title size="small"></app-title>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <button class="nav-link btn btn-link" @click="logUserOut">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import AppTitle from '@/components/common/app-title.vue';

export default {
  components: {
    'app-title': AppTitle,
  },
  methods: {
    logUserOut() {
      localStorage.removeItem('jwt');
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style scoped lang="scss">
.no-decoration {
  text-decoration: none;
}
</style>
