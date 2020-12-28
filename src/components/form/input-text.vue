<template>
  <div class="form-group">
    <label v-if="label" :for="uuid">{{ label }}<span v-if="required"> (*)</span></label>
    <input :name="name" class="form-control" :type="type" :id="uuid" :placeholder="placeholder" :value="value" v-on:input="$emit('input', $event.target.value)" :autocomplete="autocomplete" />
  </div>
</template>

<script>
export default {
  name: 'input-text',
  data() {
    return {
      uuid: this.$uuid.v1(),
    };
  },
  props: {
    name: String,
    type: {
      default: 'text',
    },
    label: String,
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'off',
    },
  },
};
</script>
