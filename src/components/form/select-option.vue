<template>
  <div class="form-group">
    <label :for="uuid">{{ label }}<span v-if="required"> (*)</span></label>
    <select class="form-control" :id="uuid">
      <option>Default select</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uuid: this.$uuid.v1()
    }
  },
  props: {
    label: String,
    options: {
      type: Array,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
  }
}
</script>
