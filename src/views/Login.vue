<template>
  <div class="container pt-5">
    <form @submit.prevent="loginUser">
      <div class="card">
        <div class="p-3 bg-dark">
          <app-title></app-title>
        </div>
        <div class="card-body">
          <input-email v-model="login.email"></input-email>
          <input-password v-model="login.password"></input-password>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import swal from 'sweetalert';
import InputEmail from '@/components/form/input-email.vue';
import InputPassword from '@/components/form/input-password.vue';
import AppTitle from '@/components/common/app-title.vue';

export default {
  components: {
    InputEmail,
    InputPassword,
    AppTitle,
  },
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post('/api/user/login', this.login);
        let token = response.data.token;
        localStorage.setItem('jwt', token);
        if (token) {
          this.$router.push({ name: 'home' });
        }
      } catch (error) {
        swal('Error', 'Something Went Wrong', 'error');
      }
    },
  },
};
</script>
