<template>
  <div :class="className">
    <img src="@/assets/images/logo.png" class="logo" />
    <h1 class="app-title">App center</h1>
  </div>
</template>

<script>
export default {
  name: 'app-title',
  props: {
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    className() {
      let name = 'title';
      if (this.size && this.size === 'small') {
        name += ' small';
      }
      return name;
    }
  },
};
</script>

<style scoped lang="scss">
.title {
  align-items: center;
  color: #fff;
  display: flex;

  .logo {
    height: 5rem;
    width: 5rem;
  }

  .app-title {
    display: inline-block;
    font-family: Teko;
    font-size: 5rem;
    line-height: 5rem;
    margin-bottom: 0;
    margin-left: 1.25rem;
  }

  &.small {
    .logo {
      height: 2rem;
      width: 2rem;
    }
    .app-title {
      font-size: 2rem;
      line-height: 2rem;
      margin-left: .8rem;
    }
  }
}
</style>