<template>
  <div>
    <h2>Files list</h2>    
    <div class="row">
      <div class="col-md-12">
        <div class="actions">
          <router-link :to="{name:'FileForm'}" class="btn btn-link">Add</router-link>
        </div>
      </div>
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Path</th>
              <th scope="col">URL</th>
              <th scope="col">JWT</th>
              <th scope="col">Secret</th>
              <th scope="col">Scope</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="file._id" v-for="(file, index) in files">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ file.name }}</td>
              <td>{{ file.path }}</td>
              <td>{{ file.url }}</td>
              <td>{{ file.jwt }}</td>
              <td>{{ file.secret }}</td>
              <td>{{ file.scope }}</td>
              <td class="p-1">
                <router-link :to="{name:'FileForm', params: {id: file._id}}" class="btn btn-link">Edit</router-link>
                <button class="btn btn-link" @click="remove(file._id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import fileService from '@/services/file.service.js';
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
    }
  },
  beforeRouteEnter(route, redirect, next) {
      next(vm => vm.$store.dispatch('files/fetch'));
  },
  computed: {
    ...mapGetters('files', {
      files: 'getFiles'
    })
  },
  methods: {
    remove(id) {
      fileService.remove(id)
        .then(() => this.refresh())
        .catch(console.error);
    },
    refresh() {
      this.$store.dispatch('files/fetch');
    }
  }
};
</script>
