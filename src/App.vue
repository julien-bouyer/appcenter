<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// Déclaration de la police Teko
@font-face {
  font-family: "Teko";
  src: local("Teko"),
   url(./assets/fonts/Teko/Teko-Light.ttf) format("truetype");
    font-weight: 100;
    font-style: normal;
}
@font-face {
  font-family: "Teko";
  src: local("Teko"),
   url(./assets/fonts/Teko/Teko-Regular.ttf) format("truetype");
    font-weight: 400;
    font-style: normal;
}
@font-face {
  font-family: "Teko";
  src: local("Teko"),
   url(./assets/fonts/Teko/Teko-Medium.ttf) format("truetype");
    font-weight: 500;
    font-style: normal;
}
@font-face {
  font-family: "Teko";
  src: local("Teko"),
   url(./assets/fonts/Teko/Teko-SemiBold.ttf) format("truetype");
    font-weight: 600;
    font-style: normal;
}
@font-face {
  font-family: "Teko";
  src: local("Teko"),
   url(./assets/fonts/Teko/Teko-Bold.ttf) format("truetype");
    font-weight: 700;
    font-style: normal;
}

// Styles généraux de l'app
body {
  background-color: rgb(31 140 67 / .2);
  margin: 0;
  padding: 0;
}
#app {
  -moz-osx-font-smoothing: grayscale;
  color: #3a3a3a;

  .title {
    font-family: Tika;
  }
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