<template>
  <div>
    <h1>动态组件和异步组件</h1>
    <p>keep-alive</p>
    <div>
      <a-button :type="changeType2" @click="clickButton('BaseIcon')">选项一</a-button>
      <a-button :type="changeType1" @click="clickButton('ComponentList')">选项二</a-button>
      <keep-alive>
        <!-- 使失活的组件被缓存，通俗的说，就是，每次切换都使用已经加载过的实例 -->
        <component-list :is="currentTabComponent"></component-list>
      </keep-alive>
    </div>
    <hr />
    <br />
    <h3>异步组件</h3>
    <p>
      在大型应用中，我们可能需要将应用分隔成小一些的代码块，并且旨在需要的时候才从服务器加载一个模块，为了简化，Vue允许你一一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。
    </p>
    <div>
      <async-example></async-example>
      <async-webpack-example></async-webpack-example>
      <async-component></async-component>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ComponentList from "@/components/component.vue";
// import BaseIcon from "@/components/BaseIcon.vue";
// 工厂函数
const AsyncExample = Vue.component("async-example", function(resolve) {
  setTimeout(function() {
    resolve({ template: `<div>I am async</div>` });
  }, 1000);
});

const AsyncWebpackExample = Vue.component(
  "async-webpack-example",

  // function(resolve) {
  // 这个特殊的require语法将会告诉webpack，自动将你的构建代码切割成多个包，这些包会通过Ajax请求加载
  // require(["./component"], resolve);
  // }

  // 你也可以在工厂函数中返回一个Pormise，所以把webpack2和ES2015语法加在一起，我们可以这样使用动态导入
  () => import("./component")
);

const AsyncComponent = () => ({
  component: import("@/components/BaseIcon.vue"),
  loading: ComponentList,
  error: AsyncExample,
  delay: 200,
  timeout: 3000,
});
export default {
  components: {
    ComponentList,
    // BaseIcon,
    // 当局部注册的时候，可以直接提供一个返回Promise的函数
    BaseIcon: () => import("@/components/BaseIcon.vue"),
    AsyncExample,
    AsyncWebpackExample,
    AsyncComponent,
  },
  data() {
    return {
      currentTabComponent: "BaseIcon",
      changeType2: "primary",
      changeType1: "default",
    };
  },
  methods: {
    clickButton(params) {
      this.currentTabComponent = params;
      if (params == "ComponentList") {
        this.changeType1 = "primary";
        this.changeType2 = "default";
      }
      if (params == "BaseIcon") {
        this.changeType1 = "default";
        this.changeType2 = "primary";
      }
    },
  },
};
</script>

<style></style>
