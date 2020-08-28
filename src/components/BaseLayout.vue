<template>
  <div>
    <h1>我是baselayout子组件</h1>
    <div class="container">
      <header>
        <slot name="header">header</slot>
      </header>
      <main>
        <!-- 一个不带name的slot出口会带有隐含的名字的default -->
        <slot>Main</slot>
      </main>
      <footer>
        <slot name="footer">footer</slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // dynamicSlotName: "header",
    };
  },
};
</script>

<style></style>
