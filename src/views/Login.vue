<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
          <form class="text-center border border-primary p-5" @submit.prevent="loginUser">
            <input type="text" id="email" class="form-control mb-5" placeholder="Email" v-model="login.email" />
            <!-- Password -->
            <input type="password" id="password" class="form-control mb-5" placeholder="Password" v-model="login.password" />
            <!-- Sign in button -->
            <center>
              <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                Sign in
              </button>
            </center>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert';

export default {
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