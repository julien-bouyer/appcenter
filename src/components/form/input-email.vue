<template>
  <input-text type="text" label="Email" placeholder="name@example.com" :value="email" v-on:input="$emit('input', $event)"></input-text>
</template>

<script>
import InputText from './input-text.vue';

export default {
  components: { InputText },
  name: 'input-email',
  props: ['email'],
};
</script>
