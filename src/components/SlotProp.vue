<template>
  <div>
    <h1>子组件</h1>
    <slot :userInfo="user"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "w",
        age: "30",
        sex: "female",
      },
    };
  },
};
</script>

<style></style>
