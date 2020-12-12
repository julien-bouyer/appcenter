<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: rgb(31 140 67 / .2);
  margin: 0;
  padding: 0;
}
#app {
  -moz-osx-font-smoothing: grayscale;
  color: #3a3a3a;
}

ul {
  list-style: none;
}

ul li::before {
  content: "\200B";
}

a {
  color: #0f3321;
}
</style>