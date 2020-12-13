<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="user._id" v-for="user in users">
          <th scope="row">{{user._id}}</th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  mounted() {
    const _this = this;
    this.$http.get('/user/', {
      headers: {
          Authorization: "Bearer " + localStorage.getItem('jwt')
      }
    }).then( res => {
      if (res.data) {
        _this.users.push(res.data)
      }
    })
    .catch(error => console.log(error)) 
  }
}
</script>