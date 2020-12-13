<template>
  <div>
    <navbar></navbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar";
export default {
  components: {
    navbar
  }
};
</script>