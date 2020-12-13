<template>
  <div class="form-group">
    <label for="email">Email</label>
    <input
      class="form-control"
      type="text"
      id="email"
      placeholder="Email"
      v-bind:value="email"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'input-email',
  props: [
    'email'
  ]
}
</script>