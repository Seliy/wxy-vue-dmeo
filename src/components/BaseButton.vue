<template>
  <div>
    <a-button type="primary">{{ counter }}<slot></slot>{{ this.normalizedSize }}</a-button>
  </div>
</template>

<script>
export default {
  props: ["initialCounter", "size"],
  data() {
    return {
      counter: this.initialCounter,
      sizeA: this.size,
    };
  },
  computed: {
    normalizedSize() {
      return this.sizeA.trim().toLowerCase();
    },
  },
  mounted() {
    console.log(this.sizeA);
  },
};
</script>

<style></style>
