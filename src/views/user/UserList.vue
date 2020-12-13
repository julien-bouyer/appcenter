<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <ul class="list-group">
                    <li class="list-group-item">Name : {{ user.name }}</li>
                    <li class="list-group-item">Email : {{ user.email }}</li>
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
      user: {}
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem('jwt');
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    }
  },
  created() {
    this.getUserDetails();
  }
};
</script>
