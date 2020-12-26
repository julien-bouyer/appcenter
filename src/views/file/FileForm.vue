<template>
  <div>
    <h2>{{ mode }} file {{ title }}</h2>
    <form @submit.prevent="save">
      <input-text label="Name" required v-model="file.name"></input-text>
      <input-text label="Secret" required v-model="file.secret"></input-text>
      <div v-if="file.url" class="mt-4 pt-4 border-top border-actions text-break">{{file.url}}</div>
      <div class="mt-4 pt-4 border-top border-actions">
        <button type="submit" class="btn btn-primary mr-2">Save</button>
        <button type="button" @click="goList" class="btn btn-outline-primary">Back</button>
      </div>
    </form>
  </div>
</template>

<script>
import InputText from '@/components/form/input-text.vue';
import fileService from '@/services/file.service.js';

export default {
  components: {
    InputText,
  },
  data() {
    return {
      title: '',
      file: {},
    };
  },
  beforeRouteEnter(route, redirect, next) {
    if (!route.params.id) {
      next(
        vm =>
          (vm.file = {
            name: '',
            secret: '',
            url: ''
          })
      );
    } else {
      fileService
        .fetchOne(route.params.id)
        .then(res => {
          next(vm => {
            vm.file = res.data;
            vm.title = res.data.name;
          });
        })
        .catch(console.error);
    }
  },
  computed: {
    mode() {
      return this.file._id ? 'Update' : 'Create';
    },
  },
  methods: {
    save() {
      if (this.file._id) {
        fileService
          .update(this.file)
          .then(() => this.goList())
          .catch(console.error);
      } else {
        fileService
          .create(this.file)
          .then(() => this.goList())
          .catch(console.error);
      }
    },
    goList() {
      this.$router.push({ name: 'FileList' });
    },
  },
};
</script>
