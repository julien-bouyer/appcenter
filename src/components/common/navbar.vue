<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <app-title size="small"></app-title>
      <div class="justify-content-end">
        <nav class="nav navbar-nav">
          <router-link v-for="(menu, index) in menus" :key="index" :class="{ 'nav-link': true, active: menu.to === currentPath }" :to="menu.to">{{ menu.label }}</router-link>
          <div class="nav-divider"></div>
          <button class="nav-link btn btn-link" @click="logUserOut">Logout</button>
        </nav>
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
  data() {
    return {
      currentPath: '/',
      menus: [
        {
          label: 'Home',
          to: '/',
        },
        {
          label: 'Users',
          to: '/users',
        },
        {
          label: 'Register',
          to: '/register',
        },
        {
          label: 'Files',
          to: '/files',
        },
      ]
    }
  },
  methods: {
    logUserOut() {
      localStorage.removeItem('jwt');
      this.$router.push({ name: 'login' });
    },
  },
  watch: {
    $route(to) {
      this.currentPath = to.path;
    },
  },
};
</script>
