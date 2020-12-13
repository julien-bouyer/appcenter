<template>
  <div>
    <navbar></navbar>
    <section>
      <div class="container mt-5">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar';
export default {
  components: {
    navbar
  }
};
</script>
