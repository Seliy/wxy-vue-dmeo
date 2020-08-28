<template>
  <div>
    <h1>条件渲染</h1>
    <div>
      <h3>V-show</h3>
      <p>
        另一个用于根据条件展示元素的选项时v-show指令。用法大致一样：不同的是带有v-show的元素始终会被渲染并保留在Dom中。v-show只是简单的切换元素和CSS
        property display
      </p>
      <p v-show="ok">exist</p>
      <p :style="borderLeft">注意：v-show不支持`template`元素,也不支持`v-else`</p>
    </div>
    <div>
      <h3>v-ifVSv-show</h3>
      <div>
        <p>v-if是`真正`的条件渲染。因为他会确保在切换过程中条件块内的事件监听器和子组件适当的销毁和重建</p>
        <p>v-if是惰性的：如果在初始渲染时条件为假，则什么也不做--直到条件第一次变为真时，才会开始渲染条件块。</p>
        <p>相比之下，v-show就简单得多--不管初始条件时什么，元素总是会被渲染，并且只是简单地基于CSS进行切换。</p>
        <p>
          一般来说，v-if有更高的切换开销，而v-show有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用v-show较好，如果在运行时条件很少改变，则使用v-if较好。
        </p>
      </div>
      <div>
        <h3>v-if与v-for一起使用</h3>
        <div>
          <p :style="borderLeft">不推荐同时使用v-if和v-for</p>
          <p>当v-if与v-for同时使用时，v-for具有比v-if更高的优先级。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ok: true,
      borderLeft: {
        borderLeft: "3px solid red",
      },
    };
  },
};
</script>

<style scoped>
h3 {
  color: rgb(214, 78, 78);
}

h5 {
  color: lightpink;
}
</style>
