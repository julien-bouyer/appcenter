<template>
  <div class="container pt-5">
    <form @submit.prevent="download">
      <div class="card">
        <div class="p-3 bg-dark">
          <app-title></app-title>
        </div>
        <div class="card-body">
          <input-text label="Secret" v-model="secret"></input-text>
          <button type="submit" class="btn btn-primary">Download</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InputText from '@/components/form/input-text.vue';
import AppTitle from '@/components/common/app-title.vue';

export default {
  components: {
    InputText,
    AppTitle,
  },
  data() {
    return {
      file: '',
      secret: '',
    };
  },
  beforeRouteEnter(route, redirect, next) {
    next(vm => (vm.file = route.params.file));
  },
  methods: {
    async download() {
      try {
        let response = await this.$http.post(`/d/f/${this.file}`, {
          secret: this.secret
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
