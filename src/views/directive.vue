<template>
  <div id="one">
    <h1>自定义指令</h1>
    <input v-focus v-model="msg" />
    <!-- <div id="hook-arguments-example" v-demo:foo.a.b="msg"></div> -->
    <div id="base-example">
      <p>Scroll down the page</p>
      <p v-pin:[direction]="200">stickfdadafafaf</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "43",
      direction: "left",
    };
  },
  directives: {
    focus: {
      inserted: function(el, binding) {
        el.focus();
        console.log(binding);
        console.log(el.dataset);
      },
    },
    demo: {
      bind: function(el, binding, vnode) {
        var attr = JSON.stringify;
        el.innerHTML =
          "name" +
          attr(binding.name) +
          "<br>" +
          "value" +
          attr(binding.value) +
          "<br>" +
          "expression" +
          attr(binding.expression) +
          "<br>" +
          "argument" +
          attr(binding.arg) +
          "<br>" +
          "modifiers" +
          attr(binding.modifiers) +
          "<br>" +
          "vnode.keys" +
          Object.keys(vnode).join(",");
      },
    },
    pin: {
      bind: function(el, binding) {
        el.style.position = "fixed";
        // el.style.top = binding.value + "px";
        var s = binding.arg == "left" ? "left" : "top";
        el.style[s] = binding.value + "px";
      },
    },
  },
};
</script>

<style scoped>
#one {
  width: auto;
  height: 3000px;
}
</style>
