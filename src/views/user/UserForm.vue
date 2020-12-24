<template>
  <div>
    <h2>{{ mode }} user {{ title }}</h2>
    <form @submit.prevent="save" autocomplete="off">
      <input-text label="Name" required v-model="user.name"></input-text>
      <input-text label="Email" required v-model="user.email"></input-text>
      <input-password label="Password" required v-model="user.password"></input-password>
      <select-option label="Role" required v-model="user.role" :options="roles"></select-option>
      <div class="mt-4 pt-4 border-top border-actions">
        <button type="submit" class="btn btn-primary mr-2">Save</button>
        <button type="button" @click="goList" class="btn btn-outline-primary">Back</button>
      </div>
    </form>
  </div>
</template>

<script>
import InputText from '@/components/form/input-text.vue';
import InputPassword from '@/components/form/input-password.vue';
import SelectOption from '@/components/form/select-option.vue';
import userService from '@/services/user.service.js';
import roleService from '@/services/role.service.js';

export default {
  components: {
    InputText,
    InputPassword,
    SelectOption,
  },
  data() {
    return {
      title: '',
      user: {},
      roles: roleService.get(),
    };
  },
  beforeRouteEnter(route, redirect, next) {
    if (!route.params.id) {
      next(
        vm =>
          (vm.user = {
            name: '',
            email: '',
            password: '',
            role: '',
          })
      );
    } else {
      userService.fetchOne(route.params.id).then(res => {
        next(vm => {
          vm.user = res.data;
          vm.title = res.data.name;
        });
      });
    }
  },
  computed: {
    mode() {
      return this.user._id ? 'Update' : 'Create';
    },
  },
  methods: {
    save() {
      if (this.user._id) {
        userService
          .update(this.user)
          .then(() => this.goList())
          .catch(console.error);
      } else {
        userService
          .create(this.user)
          .then(() => this.goList())
          .catch(console.error);
      }
    },
    goList() {
      this.$router.push({ name: 'UserList' });
    },
  },
};
</script>
