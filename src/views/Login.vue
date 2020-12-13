<template>
  <div class="container">
    <form @submit.prevent="loginUser">
      <div class="card">
        <div class="card-header">
          <img src="@/assets/images/logo.png" class="logo" />
          <h1 class="app-title">App center</h1>
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

export default {
  components: {
    'input-email': InputEmail,
    'input-password': InputPassword
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
        let response = await this.$http.post('/user/login', this.login);
        let token = response.data.token;
        localStorage.setItem('jwt', token);
        if (token) {
          this.$router.push({ name: 'home' });
        }
      } catch (err) {
        swal('Error', 'Something Went Wrong', 'error');
        console.log(err.response);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 3rem;
}

.card {
  margin: 0 auto;
  width: 40rem;

  .card-header {
    align-items: center;
    background-color: #24478f;
    color: #fff;
    display: flex;

    .logo {
      height: 5rem;
      width: 5rem;
    }

    .app-title {
      display: inline-block;
      font-family: Teko;
      font-size: 5rem;
      margin-bottom: 0;
      margin-left: 1.25rem;
    }
  }
}
</style>