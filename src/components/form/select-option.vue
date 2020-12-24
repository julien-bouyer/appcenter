<template>
  <div class="form-group">
    <label :for="uuid">{{ label }}<span v-if="required"> (*)</span></label>
    <select class="form-control" :id="uuid" :value="value" @change="onChange($event.target.value)">
      <option disabled value>Choose</option>
      <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uuid: this.$uuid.v1(),
    };
  },
  props: {
    label: String,
    options: {
      type: Array,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    onChange(val) {
      this.$emit('input', val);
    },
  },
};
</script>
