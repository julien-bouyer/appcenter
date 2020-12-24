<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <app-title size="small"></app-title>
      <div class="justify-content-end">
        <nav class="nav navbar-nav">
          <router-link v-for="(menu, index) in menus" :key="index" :class="{ 'nav-link': true, active: menu.name === currentMenu }" :to="menu.to">{{ menu.label }}</router-link>
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
      currentMenu: '/',
      menus: [
        {
          name: 'home',
          label: 'Home',
          to: '/home',
        },
        {
          name: 'users',
          label: 'Users',
          to: '/users',
        },
        {
          name: 'files',
          label: 'Files',
          to: '/files',
        },
      ],
    };
  },
  created() {
    this.currentMenu = this.$route.meta.menu;
  },
  methods: {
    logUserOut() {
      localStorage.removeItem('jwt');
      this.$router.push({ name: 'login' });
    },
  },
  watch: {
    $route(to) {
      this.currentMenu = to.meta.menu;
    },
  },
};
</script>
