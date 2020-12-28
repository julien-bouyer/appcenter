<template>
  <div class="container pt-5">
    <div class="card">
      <div class="p-3 bg-dark">
        <app-title></app-title>
      </div>
      <div class="card-body">
        <h3 class="mb-4">{{ file.name }}</h3>
        <form method="get" :action="url">
          <input-text name="secret" placeholder="Enter the secret" v-model="secret"></input-text>
          <button type="submit" class="btn btn-primary mt-2" :disabled="!secret">Download</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import jwt from 'jsonwebtoken';
import utf8 from 'utf8';

import { host } from '@/common/http.constants';
import InputText from '@/components/form/input-text.vue';
import AppTitle from '@/components/common/app-title.vue';

export default {
  components: {
    InputText,
    AppTitle,
  },
  data() {
    return {
      file: {},
      token: '',
      secret: '',
      url: '',
    };
  },
  beforeRouteEnter(route, redirect, next) {
    next(vm => {
      vm.token = route.params.token;
      vm.file = jwt.decode(utf8.decode(vm.token));
      vm.url = `${host}/d/f/${vm.token}`;
    });
  },
};
</script>
