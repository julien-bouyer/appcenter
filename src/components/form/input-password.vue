<template>
  <div class="form-group">
    <label for="password">Password</label>
    <input
      class="form-control"
      type="password"
      id="password"
      placeholder="Password"
      v-bind:value="password"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'input-password',
  props: [
    'password'
  ]
}
</script>