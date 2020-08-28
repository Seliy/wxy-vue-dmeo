<template>
  <div>
    <span>
      <!-- 插槽prop -->
      <slot :users="users">{{ users.lastName }}</slot>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: {
        name: "wang",
        lastName: "ding",
        firstName: "xinyue",
      },
    };
  },
};
</script>

<style></style>
