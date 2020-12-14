<template>
    <input-text type="password" label="Password" placeholder="Password" :value="password" v-on:input="$emit('input', $event)"></input-text>
</template>

<script>
import InputText from './input-text.vue';

export default {
  components: { InputText },
  name: 'input-password',
  props: ['password'],
};
</script>
