<template>
  <div>
    <h1 @click="my">点击我</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$on("my", function() {
      alert("子组件接收自己发射的事件");
    });
  },
  methods: {
    my() {
      alert("hh");
      this.$emit("my");
    },
  },
};
</script>

<style></style>
