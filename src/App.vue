<template>
  <div id="app">
    <!-- <test> -->
    <router-view />
    <!-- </test> -->
  </div>
</template>
<script>
// import test from "@/layouts/commonHeader.vue";
export default {
  components: {
    // test,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
  color: #2c3e50;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
h3 {
  color: rgb(214, 78, 78);
}

h5 {
  color: lightpink;
}
</style>
